import { Injectable } from '@angular/core';

import { ConfigService } from './config.service';
import { ApiService } from './api.service';

import { Observable } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class AngularPWAService {
  private dataApiUrl: string;

  constructor(
    private apiService: ApiService,
    private configService: ConfigService
  ) {
    this.dataApiUrl = this.configService.get('DATA_API_URL');
  }

  getLatestRecipes(): Observable<Recipe[]> {
    console.log('[PWA Service] Requesting latest recipes');

    return this.apiService.callApi(`${this.dataApiUrl}/latest-recipes`);
  }

  getGrandmasRecipes(): Observable<Recipe[]> {
    console.log('[PWA Service] Requesting latest recipes');

    return this.apiService.callApi(`${this.dataApiUrl}/grandmas-cookbook`);
  }
}
