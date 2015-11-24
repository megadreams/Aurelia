/*
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
@inject(HttpClient)
*/
import {I18N} from 'aurelia-i18n';

'use strict';

export class Base {

  // 多言語対応
  static inject = [I18N];

  // TODO: 本来はBaseViewなどを継承し、親Viewで言語設定を行うのが良いと感じている
  local: 'en';

  constructor(i18n) {

    // 多言語対応設定
    this.i18n = i18n;
//    this.setLocale(this.local);
  };


  /**
   * 言語切り替え用のメソッド
   *
   */
  setLocale(local) {
    this.local = local || 'ja';


    // 言語設定を行う
    // - ja: 日本語
    // - en: 英語
    this.i18n
        .setLocale(this.local)
        .then( () => {
    });
    // 下記のような形でキーを元に翻訳データを取得する
    //console.log(this.i18n.tr('boardHeadTitle'));
  };
}
