import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRouteEnum } from 'src/app/features/login/enums/login-route.enum';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAccountComponent {
  constructor(private readonly router: Router) {}

  onRegister(): void {
    this.router.navigate([`/${LoginRouteEnum.REGISTER}`])
  }
}
