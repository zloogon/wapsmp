import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { NavController } from 'ionic-angular/index';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  private loginInfo: any = {};
  constructor(private loginService: LoginService, private nav: NavController) { }

  login() {
    this.loginService.login(this.loginInfo.userName);
    this.nav.pop();
  }

  createAccount() {

  }
}