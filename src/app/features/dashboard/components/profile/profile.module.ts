import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileInfoCardModule } from '../../../../shared/components/profile-info-card/profile-info-card.module';
import { ScoreCardModule } from '../../../../shared/components/score-card/score-card.module';
import { ProfileMainInfoModule } from '../../../../shared/components/profile-main-info/profile-main-info.module';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileInfoCardModule,
    ProfileMainInfoModule,
    RouterModule.forChild(routes),
    ScoreCardModule,
  ],
})
export class ProfileModule {}
