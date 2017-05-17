import { Injectable } from '@angular/core';
import { AuthService } from '../../providers/auth-service/auth.service'

@Injectable()
export class LoginService {
  private _username: string;

  constructor(private authService: AuthService) {

  }

  login(username) {
    this._username = username;
  }

  logout() {
    this._username = '';
  }

  get isLoggedIn(): boolean {
    return this._username in this;
  }

  get username(): string {
    return this._username;
  }
}