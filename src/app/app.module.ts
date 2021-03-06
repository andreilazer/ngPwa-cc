import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppShellUpdateComponent } from './app-shell-update/app-shell-update.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { OdeToFoodComponent } from './ode-to-food/ode-to-food.component';

import { PushSubscriptionComponent } from './push-subscription/push-subscription.component';
import { CachedRouteComponent } from './cached-route/cached-route.component';
import { NonCachedRouteComponent } from './non-cached-route/non-cached-route.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    NavigationComponent,
    DashboardComponent,
    RecipeListComponent,
    OdeToFoodComponent,
    PushSubscriptionComponent,
    AppShellUpdateComponent,
    CachedRouteComponent,
    NonCachedRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
