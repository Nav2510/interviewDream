import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup-card',
  templateUrl: './login-signup-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginSignupCardComponent {
  isRegister = true;
  model: FormGroup = this.buildForm();

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {}

  onSubmit() {
    if (this.isRegister) {
      this.router.navigate(['/select-account']);
    } else {
      this.router.navigate(['/dashboard/profile']);
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

  onForgetPassword() {
    // TODO: Update this method
  }

  onToggleLoginRegister() {
    this.isRegister = !this.isRegister;
  }

  buildForm(): FormGroup {
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
