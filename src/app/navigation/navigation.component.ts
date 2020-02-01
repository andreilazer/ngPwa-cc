import { Component, OnDestroy } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { UpdateService } from '../update.service';
import { MatSnackBar } from '@angular/material/typings';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnDestroy {
  destroy = new Subject();

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
