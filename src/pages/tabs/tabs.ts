import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { UploadPage } from '../upload/upload';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UploadPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
