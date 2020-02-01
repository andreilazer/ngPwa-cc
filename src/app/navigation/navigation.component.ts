import { Component, OnDestroy } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { UpdateService } from '../update.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnDestroy {
  destroy = new Subject();
  online = this.updateService.online;

  installPromptEvent;
  btnInstallDisabled = true;


  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private updateService: UpdateService,
    public snackBar: MatSnackBar
  ) {
    // uncomment this line to check for app updates every 30 seconds
    // this.subscribeToUpdates();
    this.prepareInstallButton();
  }

  install() {
    this.btnInstallDisabled = true;
    // Show the modal add to home screen dialog
    this.installPromptEvent.prompt();
    // Wait for the user to respond to the prompt
    this.installPromptEvent.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      // Clear the saved prompt since it can't be used again
      this.installPromptEvent = null;
    });
  }

  private prepareInstallButton() {
    window.addEventListener('beforeinstallprompt', event => {
      // Prevent Chrome <= 67 from automatically showing the prompt
      event.preventDefault();
      // Stash the event so it can be triggered later.
      this.installPromptEvent = event;
      // Update the install UI to notify the user app can be installed
      this.btnInstallDisabled = false;
    });
  }

  private subscribeToUpdates() {
    this.updateService.subscribeToUpdates(this.destroy);
    this.updateService.available
      .pipe(
        takeUntil(this.destroy),
        tap(update => console.log('update available', update))
      )
      .subscribe(event => {
        console.log(
          '[App Shell Update] Update available: current version is',
          event.current,
          'available version is',
          event.available
        );

        const versionMessage = event.available.appData
          ? event.available.appData['versionMessage']
          : '';
        const snackBarRef = this.snackBar.open(
          versionMessage || 'Newer version of the app is available.',
          'Refresh the page'
        );

        snackBarRef.onAction().subscribe(() => {
          this.updateService.activateUpdate();
        });
      });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
