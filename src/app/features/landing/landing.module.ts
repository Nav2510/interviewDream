import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LandingComponent } from './landing.component';
import { CardModule } from '../../shared/components/card/card.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';

const MATERIALS = [MatIconModule, MatInputModule, MatButtonModule];

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  declarations: [
    CreateAccountComponent,
    FooterComponent,
    LandingComponent,
    NavBarComponent,
    SubscribeComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ...MATERIALS,
  ],
  exports: [LandingComponent],
})
export class LandingModule {}
