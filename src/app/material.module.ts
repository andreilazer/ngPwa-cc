import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatProgressBarModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import 'hammerjs';

@NgModule({
  imports: [
    LayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressBarModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  exports: [
    LayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressBarModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
