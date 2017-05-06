import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
    { path: 'admin',
      loadChildren: 'app/admin/admin.module#AdminModule',
      canLoad: [AuthGuard]},
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard
  ]
})

export class AppRoutingModule {}
