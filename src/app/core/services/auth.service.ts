import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LoginUserGQL } from '../../../graphql/documents/mutations/auth/login-user.graphql-gen';
import { RegisterUserGQL } from '../../../graphql/documents/mutations/auth/register-user.graphql-gen';
import {
  LoginInputData,
  RegisterInputData,
} from '../../../graphql/generated/graphql.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private loginGQL: LoginUserGQL,
    // eslint-disable-next-line no-unused-vars
    private registerGQL: RegisterUserGQL,
  ) {}

  login(email: string, password: string): Observable<boolean> {
    const loginInput: LoginInputData = {
      email,
      password,
    };
    return this.loginGQL.mutate({ input: loginInput }).pipe(
      tap((response) => {
        if (response.data.login.accessToken) {
          this.setToken(
            response.data.login.accessToken,
            response.data.login.expiresIn,
            response.data.login.userId,
          );
        }
      }),
      map((response) => !!response.data),
    );
  }

  register(
    email: string,
    password: string,
    username: string,
  ): Observable<boolean> {
    const registerInput: RegisterInputData = {
      email,
      password,
      username,
    };
    return this.registerGQL.mutate({ input: registerInput }).pipe(
      tap((response) => {
        if (response.data.register.accessToken) {
          this.setToken(
            response.data.register.accessToken,
            response.data.register.expiresIn,
            response.data.register.userId,
          );
        }
      }),
      map((response) => !!response.data),
    );
  }

  logout() {
    this.clearToken();
    // TODO: Call api for logout
    return of(true);
  }

  getToken(): string | null {
    const token = localStorage.getItem('id_token');

    return token ? token : null;
  }

  getLoggedUserId(): string | null {
    const userId = localStorage.getItem('user_id');

    return userId ? userId : null;
  }

  isLoggedIn() {
    return this.validateToken();
  }

  private validateToken(): boolean {
    const expiredAt = localStorage.getItem('expires_at');

    if (new Date() < new Date(expiredAt)) {
      // TODO: Validate token from backend
      return true;
    }
    return false;
  }

  private clearToken() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
  }

  private setToken(token: string, expiresIn: number, userId: string) {
    const expiresTime = new Date();

    expiresTime.setSeconds(expiresTime.getSeconds() + expiresIn);
    localStorage.setItem('id_token', token);
    localStorage.setItem('user_id', userId);
    localStorage.setItem('expires_at', expiresTime.toISOString());
  }
}
