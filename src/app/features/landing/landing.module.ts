import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { LandingComponent } from './landing.component';
import { CardModule } from '../../shared/components/card/card.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarActionsModule } from '../../shared/components/navbar-actions/navbar-actions.module';

const MATERIALS = [
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
];

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  declarations: [
    BannerComponent,
    CreateAccountComponent,
    FooterComponent,
    LandingComponent,
    NavBarComponent,
    SubscribeComponent,
  ],
  imports: [
    CardModule,
    CommonModule,
    NavbarActionsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ...MATERIALS,
  ],
  exports: [LandingComponent],
})
export class LandingModule {}
