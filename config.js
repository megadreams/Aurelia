System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-animator-css": "github:aurelia/animator-css@0.18.0",
    "aurelia-binding": "github:aurelia/binding@0.11.3",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.19.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.10.0",
    "aurelia-fetch-client": "github:aurelia/fetch-client@0.4.0",
    "aurelia-framework": "github:aurelia/framework@0.18.0",
    "aurelia-history": "github:aurelia/history@0.9.0",
    "aurelia-history-browser": "github:aurelia/history-browser@0.10.0",
    "aurelia-i18n": "github:aurelia/i18n@0.3.0",
    "aurelia-loader": "github:aurelia/loader@0.11.0",
    "aurelia-loader-default": "github:aurelia/loader-default@0.12.0",
    "aurelia-logging": "github:aurelia/logging@0.9.0",
    "aurelia-metadata": "github:aurelia/metadata@0.10.1",
    "aurelia-pal": "github:aurelia/pal@0.3.0",
    "aurelia-pal-browser": "github:aurelia/pal-browser@0.3.0",
    "aurelia-path": "github:aurelia/path@0.11.0",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.9.0",
    "aurelia-router": "github:aurelia/router@0.14.0",
    "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
    "aurelia-templating": "github:aurelia/templating@0.17.4",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.17.0",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.17.0",
    "aurelia-templating-router": "github:aurelia/templating-router@0.18.0",
    "babel": "npm:babel-core@5.8.33",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "components/jquery": "github:components/jquery@2.1.4",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.10.1",
    "font-awesome": "npm:font-awesome@4.4.0",
    "lodash": "npm:lodash@3.10.1",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:aurelia/animator-css@0.18.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.17.4"
    },
    "github:aurelia/binding@0.11.3": {
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/bootstrapper@0.19.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.10.0",
      "aurelia-framework": "github:aurelia/framework@0.18.0",
      "aurelia-history": "github:aurelia/history@0.9.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.10.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.12.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-pal-browser": "github:aurelia/pal-browser@0.3.0",
      "aurelia-router": "github:aurelia/router@0.14.0",
      "aurelia-templating": "github:aurelia/templating@0.17.4",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.17.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.17.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.18.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/dependency-injection@0.12.1": {
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/event-aggregator@0.10.0": {
      "aurelia-logging": "github:aurelia/logging@0.9.0"
    },
    "github:aurelia/fetch-client@0.4.0": {
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/framework@0.18.0": {
      "aurelia-binding": "github:aurelia/binding@0.11.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "aurelia-templating": "github:aurelia/templating@0.17.4",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/history-browser@0.10.0": {
      "aurelia-history": "github:aurelia/history@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/i18n@0.3.0": {
      "Intl.js": "github:andyearnshaw/Intl.js@0.1.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.10.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.12.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.17.4",
      "i18next": "github:i18next/i18next@1.11.1"
    },
    "github:aurelia/loader-default@0.12.0": {
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0"
    },
    "github:aurelia/loader@0.11.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-path": "github:aurelia/path@0.11.0"
    },
    "github:aurelia/logging-console@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0"
    },
    "github:aurelia/metadata@0.10.1": {
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/pal-browser@0.3.0": {
      "aurelia-pal": "github:aurelia/pal@0.3.0"
    },
    "github:aurelia/route-recognizer@0.9.0": {
      "aurelia-path": "github:aurelia/path@0.11.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/router@0.14.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.10.0",
      "aurelia-history": "github:aurelia/history@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.9.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/task-queue@0.9.0": {
      "aurelia-pal": "github:aurelia/pal@0.3.0"
    },
    "github:aurelia/templating-binding@0.17.0": {
      "aurelia-binding": "github:aurelia/binding@0.11.3",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-templating": "github:aurelia/templating@0.17.4"
    },
    "github:aurelia/templating-resources@0.17.0": {
      "aurelia-binding": "github:aurelia/binding@0.11.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "aurelia-templating": "github:aurelia/templating@0.17.4",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/templating-router@0.18.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-router": "github:aurelia/router@0.14.0",
      "aurelia-templating": "github:aurelia/templating@0.17.4"
    },
    "github:aurelia/templating@0.17.4": {
      "aurelia-binding": "github:aurelia/binding@0.11.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.1",
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.1",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
