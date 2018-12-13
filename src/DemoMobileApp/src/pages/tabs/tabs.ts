import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Demo1Page } from '../demo1/demo1';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Demo1Page;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
