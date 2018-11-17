import { Injectable } from '@angular/core';
import enTranslation from './data/i18n/en';
import zhTranslation from './data/i18n/zh';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  data: any = {};
  constructor() { }
  use(lang: string): void {
    if (lang.startsWith('zh-')) {
      this.data = Object.assign({}, zhTranslation.translate || {});
    } else {
      this.data = Object.assign({}, enTranslation.translate || {});
    }
  }
}
