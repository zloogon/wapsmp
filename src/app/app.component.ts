import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@Component({
  template: '<ion-nav #baseNav></ion-nav>',
  providers: [LoginService]
})
export class MyApp {
  @ViewChild('baseNav') nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private loginService: LoginService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    const componentStack: Array<{ page: Component }> = [{
      page: HomeComponent
    }];

    if (!this.loginService.isLoggedIn) {
      componentStack.push({ page: LoginComponent });
    }

    this.nav.insertPages(0, componentStack, { animate: false });

    // this.nav.push(HomeComponent, { animate: false });
  }
}