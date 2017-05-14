import { NgModule }      from '@angular/core';
import { RouterModule,
         Routes,
         PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';

import { SelectivePreloadingStragey } from './selective-preloading-strategy';

const appRoutes: Routes = [
    { path: 'compose',
      component: ComposeMessageComponent,
      outlet: 'popup' },
    { path: 'admin',
      loadChildren: 'app/admin/admin.module#AdminModule',
      canLoad: [AuthGuard]
    },
    { path: 'crisis-center',
      loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
      data: { preload: true }
    },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadingStragey })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStragey
  ]
})

export class AppRoutingModule {}
