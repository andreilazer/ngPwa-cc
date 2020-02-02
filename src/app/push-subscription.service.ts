import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ConfigService } from './config.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PushSubscriptionService {
  private pushSubscriptionUrl: string;

  constructor(
    private apiService: ApiService,
    private configService: ConfigService
  ) {
    this.pushSubscriptionUrl = `${this.configService.get(
      'PUSH_API_URL'
    )}/api/PushSubscriptions`;
  }

  addSubscriber(subscription: PushSubscription): Observable<any> {
    console.log('[Push Subscription Service] Adding subscriber');

    return this.apiService.callApi(this.pushSubscriptionUrl, 'POST', subscription);
  }

  deleteSubscriber(subscription): Observable<any> {
    console.log('[Push Subscription Service] Deleting subscriber');

    return this.apiService.callApi(this.pushSubscriptionUrl + '/removeSubscription', 'POST', subscription);
  }
}
