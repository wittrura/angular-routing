import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises | async"
      (click)="onSelect(crisis)"
      [class.selected]="isSelected(crisis)">
        <span class="badge">{{crisis.id}}</span>
        {{crisis.name}}
      </li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class CrisisListComponent implements OnInit {
  crises: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit(): void {
    this.crises = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getCrises();
      });
  }

  onSelect(crisis: Crisis): void {
    this.selectedId = crisis.id;

    // Navigate with a relative link
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }

  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
