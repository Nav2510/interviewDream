import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './components/courses/courses.component';
import { PaperComponent } from './components/paper/paper.component';
import { PapersComponent } from './components/papers/papers.component';
import { TestComponent } from './components/test/test.component';
import { TestsComponent } from './components/tests/tests.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'papers',
        component: PapersComponent,
      },
      {
        path: 'papers/:paperId',
        component: PaperComponent,
      },
      {
        path: 'tests',
        component: TestsComponent,
      },
      {
        path: 'tests/:testId',
        component: TestComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
