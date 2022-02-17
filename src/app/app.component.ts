import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DEFAULT_LANGUAGE } from './shared/constants/languages.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private readonly translateService: TranslateService) {
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE.code);
    this.translateService.use(DEFAULT_LANGUAGE.code);
  }
}
