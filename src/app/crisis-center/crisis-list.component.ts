import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';

@Component({
  template: `
    <ul class="crises">
      <li *ngFor="let crisis of crises | async">
        <a [routerLink] = "crisis.id"
           [class.selected]="isSelected(crisis)">
          <span class="badge">{{crisis.id}}</span>
          {{crisis.name}}
        </a>
      </li>
    </ul>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .crises {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .crises li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .crises li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .crises li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .crises .text {
      position: relative;
      top: -3px;
    }
    .crises .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [CrisisService]
})
export class CrisisListComponent implements OnInit {
  // title = 'Tour of Crises';
  crises: Observable<Crisis[]>;
  // selectedCrisis: Crisis;
  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  // getCrises(): void {
  //   this.crisisService.getCrises().then(crises => this.crises = crises);
  // }

  ngOnInit(): void {
    // this.getCrises();
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
