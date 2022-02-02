import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRouteEnum } from 'src/app/features/login/enums/login-route.enum';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAccountComponent {
  readonly subscribeURI = `${environment.firebaseStorageURI}subscribe.png`;
  readonly instructorURI = `${environment.firebaseStorageURI}instructor.png`;

  constructor(private readonly router: Router) {}

  onRegister(): void {
    this.router.navigate([`/${LoginRouteEnum.REGISTER}`]);
  }
}
