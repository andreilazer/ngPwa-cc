import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { AngularPWAService } from '../angular-pwa-service.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'ode-to-food',
  templateUrl: './ode-to-food.component.html',
  styleUrls: ['./ode-to-food.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OdeToFoodComponent implements OnInit {
  isInteractionStarted: boolean = false;

  recipes$: Observable<Recipe[]>;
  constructor(
    private pwaService: AngularPWAService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  loadTimeLine() {
    this.isInteractionStarted = true;

    this.recipes$ = this.pwaService.getLatestRecipes();
  }

  loadFavorites() {
    this.isInteractionStarted = true;

    this.recipes$ = this.pwaService.getGrandmasRecipes();
  }
}
