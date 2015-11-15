import 'bootstrap';

// 多言語対応ライブラリ
import {I18N} from 'aurelia-i18n';


export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()

    // 多言語対応用処理
    .plugin('aurelia-i18n', (instance) => {
      // adapt options to your needs (see http://i18next.com/pages/doc_init.html)
      instance.setup({
        resGetPath : 'locale/__lng__/__ns__.json',
        // ここにデフォルトの言語を追加する
        lng : 'en',
        attributes : ['t','i18n'],
        getAsync : true,
        sendMissing : false,
        fallbackLng : 'en',
        debug : false
      });
    });

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(a => a.setRoot());
}
