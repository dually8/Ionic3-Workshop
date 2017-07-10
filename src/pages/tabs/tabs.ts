import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { UploadPage } from '../upload/upload';
import { ViewPage } from '../view/view';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UploadPage;
  tab2Root = ViewPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
