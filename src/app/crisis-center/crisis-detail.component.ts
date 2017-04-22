import { Component, HostBinding } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { slideInDownAnimation } from '../animations';

import { CrisisService } from './crisis.service';

import { Crisis } from './crisis';

@Component({
  selector: 'crisis-detail',
  animations: [slideInDownAnimation],
  template: `
    <div *ngIf="crisis">
      <h2>{{crisis.name}} details!</h2>
      <div>
        <label>id: </label>{{crisis.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="crisis.name" placeholder="name"/>
      </div>
    </div>
    <button (click)="gotoCrisises()">Back</button>
  `
})
export class CrisisDetailComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getCrisis(+params['id']))
      .subscribe((crisis: Crisis) => this.crisis = crisis);
    }

  gotoCrisises() {
    // this.router.navigate(['/crises']);
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/crises', { id: crisisId, foo: 'foo' }]);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
