import { Component } from '@angular/core';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  rootPage:any = TabsPage;

  constructor() {
  }
}
