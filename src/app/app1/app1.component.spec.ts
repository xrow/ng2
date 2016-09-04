/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { App1Component } from './app1.component';

describe('App: Ng2', () => {
  beforeEach(() => {
    addProviders([App1Component]);
  });

  it('should create the app',
    inject([App1Component], (app: App1Component) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'app works!\'',
    inject([App1Component], (app: App1Component) => {
      expect(app.title).toEqual('app works!');
    }));
});
