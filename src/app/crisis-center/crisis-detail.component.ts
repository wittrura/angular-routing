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
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}, {relativeTo: this.route}]);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
