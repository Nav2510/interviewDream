import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'courses',
        loadChildren: () =>
          import('./components/courses/courses.module').then(
            (module) => module.CoursesModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./components/profile/profile.module').then(
            (module) => module.ProfileModule
          ),
      },
      {
        path: 'papers',
        loadChildren: () =>
          import('./components/papers/papers.module').then(
            (module) => module.PapersModule
          ),
      },
      {
        path: 'papers/:paperId',
        loadChildren: () =>
          import('./components/paper/paper.module').then(
            (module) => module.PaperModule
          ),
      },
      {
        path: 'tests',
        loadChildren: () =>
          import('./components/tests/tests.module').then(
            (module) => module.TestsModule
          ),
      },
      {
        path: 'tests/:testId',
        loadChildren: () =>
          import('./components/test/test.module').then(
            (module) => module.TestModule
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
