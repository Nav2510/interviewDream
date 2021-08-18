import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../core/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'courses',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./components/courses/courses.module').then(
            (module) => module.CoursesModule,
          ),
      },
      {
        path: 'courses/:id',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./components/papers/papers.module').then(
            (module) => module.PapersModule,
          ),
      },
      {
        path: 'profile',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./components/profile/profile.module').then(
            (module) => module.ProfileModule,
          ),
      },
      {
        path: 'papers',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./components/papers/papers.module').then(
            (module) => module.PapersModule,
          ),
      },
      {
        path: 'papers/:paperId',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./components/paper/paper.module').then(
            (module) => module.PaperModule,
          ),
      },
      {
        path: 'tests',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./components/tests/tests.module').then(
            (module) => module.TestsModule,
          ),
      },
      {
        path: 'tests/:testId',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./components/test/test.module').then(
            (module) => module.TestModule,
          ),
      },
      {
        path: '**',
        redirectTo: 'profile',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
