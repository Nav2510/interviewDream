import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login-signup-card',
  templateUrl: './login-signup-card.component.html',
  styleUrls: ['./login-signup-card.component.scss'],
})
export class LoginSignupCardComponent {
  isRegister = true;
  model: FormGroup = this.buildForm();

  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly router: Router,
    // eslint-disable-next-line no-unused-vars
    private readonly authService: AuthService,
  ) {}

  onSubmit() {
    if (this.isRegister) {
      this.authService
        .register(
          this.model.value.email,
          this.model.value.password,
          this.model.value.username,
        )
        .subscribe((isValidated) => {
          if (isValidated) {
            this.router.navigate(['/select-account']);
          }
        });
    } else {
      this.authService
        .login(this.model.value.email, this.model.value.password)
        .subscribe((isValidated) => {
          if (isValidated) {
            this.router.navigate(['/dashboard/profile']);
          }
        });
    }
  }

  switchToLogin() {
    this.isRegister = false;
    this.model = this.buildForm();
  }
  switchToRegister() {
    this.isRegister = true;
    this.model = this.buildForm();
  }

  onForgetPassword() {}

  onToggleLoginRegister() {
    this.isRegister = !this.isRegister;
  }

  private buildForm(): FormGroup {
    if (this.isRegister) {
      const formObj = {
        email: new FormControl(''),
        username: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
      };
      return new FormGroup(formObj);
    } else {
      const formObj = {
        email: new FormControl(''),
        password: new FormControl(''),
      };
      return new FormGroup(formObj);
    }
  }
}
