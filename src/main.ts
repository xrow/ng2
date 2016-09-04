import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { App1Component, environment } from './app/app1';
import { App2Component } from './app/app2';
import { AdServingComponent } from './app/ad-serving';

if (environment.production) {
  enableProdMode();
}

bootstrap(App1Component);
bootstrap(App2Component);
bootstrap(AdServingComponent);