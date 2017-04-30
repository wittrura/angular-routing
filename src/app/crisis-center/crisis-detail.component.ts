import { Component, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from '../animations';

// import { CrisisService } from './crisis.service';
import { DialogService } from '../dialog.service'
import { Crisis } from './crisis.service';

@Component({
  // selector: 'crisis-detail',
  template: `
    <div *ngIf="crisis">
      <h3>"{{ editName }}"</h3>
      <div>
        <label>id: </label>{{ crisis.id }}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="editName" placeholder="name"/>
      </div>
      <p>
        <button (click)="save()">Save</button>
        <button (click)="cancel()">Cancel</button>
      </p>
    </div>
  `,
  styles: ['input {width: 20em}'],
  animations: [slideInDownAnimation]
})

export class CrisisDetailComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private service: CrisisService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', {id: crisisId, foo: 'foo'}, {relativeTo: this.route}]);
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Promise<boolean> | boolean {
    // allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // otherwise ask the user with the dialog service and return its Promise
    // which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
