import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';

const crisesRoutes: Routes = [
  { path: 'crises',  component: CrisisListComponent },
  { path: 'crisis/:id', component: CrisisDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisRoutingModule { }
