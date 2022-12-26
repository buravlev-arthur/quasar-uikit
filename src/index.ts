/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

module.exports = function (api: any) {
  api.extendQuasarConf( (conf: any) => {
    // Компоненты
    conf.boot.push('~quasar-app-extension-uikit/src/boot/components');

    // Иконки
    conf.boot.push('~quasar-app-extension-uikit/src/boot/icons');

    // Цвета
    conf.framework.config.brand = require('~quasar-app-extension-uikit/src/colors');

    // Шрифты
    conf.css.push('~quasar-app-extension-uikit/src/fonts');

    if (api.hasVite !== true) {
      conf.build.transpileDependencies.push(/quasar-app-extension-uikit[\\/]dist/)
    }
  });
};
