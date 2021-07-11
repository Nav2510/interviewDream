import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginSignupCardComponent } from './login-signup-card.component';

const routes: Routes = [{ path: '', component: LoginSignupCardComponent }];

const MATERIALS = [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  declarations: [LoginSignupCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ...MATERIALS,
  ],
})
export class LoginSignupCardModule {}
