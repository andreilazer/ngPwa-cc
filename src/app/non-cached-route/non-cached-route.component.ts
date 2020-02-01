import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-cached-route',
  templateUrl: './non-cached-route.component.html',
  styleUrls: ['./non-cached-route.component.css']
})
export class NonCachedRouteComponent implements OnInit {

  constructor() { }

  /**
   * By adding
   * "navigationUrls": [
   * ".../non-cached-route"
   * ]
   * in ngsw-config this route will no longer be controlled by service worker
   */
  ngOnInit() {
  }

}
