import { Injectable } from '@angular/core';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable()
export class CrisisService {
  getCrises(): Promise<Crisis[]> {
    return Promise.resolve(CRISES);
  }

  getCrisis(id: number): Promise<Crisis> {
  return this.getCrises()
             .then(crises => crises.find(crisis => crisis.id === id));
}


  // See the "Take it slow" appendix
  getCrisesSlowly(): Promise<Crisis[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getCrises()), 2000);
    });
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
