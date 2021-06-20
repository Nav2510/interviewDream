import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup-card',
  templateUrl: './login-signup-card.component.html',
  styleUrls: ['./login-signup-card.component.scss'],
})
export class LoginSignupCardComponent {
  isRegister = true;
  model: FormGroup = this.buildForm();

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

  onForgetPassword() {}

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
