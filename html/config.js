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
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.2.1",
    "aurelia-api": "npm:aurelia-api@3.0.0-rc4",
    "aurelia-auth": "npm:aurelia-auth@3.0.1",
    "aurelia-binding": "npm:aurelia-binding@1.0.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
    "aurelia-google-maps": "npm:aurelia-google-maps@1.0.12",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.2",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.2.0.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.6",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.3",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.6",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1",
    "aurelia/task-queue": "github:aurelia/task-queue@1.0.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "christianbach/tablesorter": "github:christianbach/tablesorter@master",
    "core-js": "npm:core-js@1.2.6",
    "datatables": "npm:datatables@1.10.12",
    "datatables.net": "npm:datatables.net@1.10.12",
    "datatables.net-responsive": "npm:datatables.net-responsive@2.1.0",
    "datatables.net-responsive-bs": "npm:datatables.net-responsive-bs@2.1.0",
    "fetch": "github:github/fetch@0.11.1",
    "font-awesome": "npm:font-awesome@4.6.3",
    "google-maps-api": "npm:google-maps-api@2.0.1",
    "i": "npm:i@0.3.5",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
    "jquery": "npm:jquery@3.1.0",
    "jquery-ui": "npm:jquery-ui@1.12.0",
    "socket.io": "npm:socket.io@1.4.8",
    "socket.io-client": "npm:socket.io-client@1.4.8",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:aurelia/task-queue@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.6"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:accepts@1.3.1": {
      "mime-types": "npm:mime-types@2.1.11",
      "negotiator": "npm:negotiator@0.6.0"
    },
    "npm:asap@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.8.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.2.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-api@3.0.0-rc4": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.1",
      "extend": "npm:extend@3.0.0",
      "qs": "npm:qs@6.2.1"
    },
    "npm:aurelia-auth@3.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.3"
    },
    "npm:aurelia-binding@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.6": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.2.0.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.6",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.6",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-dependency-injection@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.5": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-google-maps@1.0.12": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.2": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-metadata@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-metadata@1.0.0-rc.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.2.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.6": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-task-queue@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.7": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base64id@0.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:benchmark@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:better-assert@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "callsite": "npm:callsite@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bindings@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.5",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bufferutil@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.4.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:datatables.net-bs@1.10.12": {
      "datatables.net": "npm:datatables.net@1.10.12",
      "jquery": "npm:jquery@3.1.0"
    },
    "npm:datatables.net-responsive-bs@2.1.0": {
      "datatables.net-bs": "npm:datatables.net-bs@1.10.12",
      "datatables.net-responsive": "npm:datatables.net-responsive@2.1.0",
      "jquery": "npm:jquery@3.1.0"
    },
    "npm:datatables.net-responsive@2.1.0": {
      "datatables.net": "npm:datatables.net@1.10.12",
      "jquery": "npm:jquery@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:datatables.net@1.10.12": {
      "jquery": "npm:jquery@3.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:datatables@1.10.12": {
      "css": "github:systemjs/plugin-css@0.1.25",
      "jquery": "npm:jquery@3.1.0"
    },
    "npm:debug@0.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.3.1": {
      "bn.js": "npm:bn.js@4.11.5",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:engine.io-client@1.6.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "component-inherit": "npm:component-inherit@0.0.3",
      "debug": "npm:debug@2.2.0",
      "engine.io-parser": "npm:engine.io-parser@1.2.4",
      "has-cors": "npm:has-cors@1.1.0",
      "indexof": "npm:indexof@0.0.1",
      "parsejson": "npm:parsejson@0.0.1",
      "parseqs": "npm:parseqs@0.0.2",
      "parseuri": "npm:parseuri@0.0.4",
      "yeast": "npm:yeast@0.1.2"
    },
    "npm:engine.io-parser@1.2.4": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
      "blob": "npm:blob@0.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "has-binary": "npm:has-binary@0.1.6",
      "utf8": "npm:utf8@2.1.0"
    },
    "npm:engine.io@1.6.11": {
      "accepts": "npm:accepts@1.3.1",
      "base64id": "npm:base64id@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "debug": "npm:debug@2.2.0",
      "engine.io-parser": "npm:engine.io-parser@1.2.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "ws": "npm:ws@1.0.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.22"
    },
    "npm:google-maps-api@2.0.1": {
      "latlng": "npm:latlng@1.0.0",
      "promise": "npm:promise@6.1.0",
      "scriptjs": "npm:scriptjs@2.5.8"
    },
    "npm:has-binary@0.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-binary@0.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.5.3",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:jquery-ui@1.12.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery@3.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.5",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.23.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.11": {
      "mime-db": "npm:mime-db@1.23.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:nan@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-fetch@1.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.8.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:parsejson@0.0.1": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseqs@0.0.2": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.4": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@6.1.0": {
      "asap": "npm:asap@1.0.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.5",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:scriptjs@2.5.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:socket.io-adapter@0.4.0": {
      "debug": "npm:debug@2.2.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-parser": "npm:socket.io-parser@2.2.2"
    },
    "npm:socket.io-client@1.4.8": {
      "backo2": "npm:backo2@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-bind": "npm:component-bind@1.0.0",
      "component-emitter": "npm:component-emitter@1.2.0",
      "debug": "npm:debug@2.2.0",
      "engine.io-client": "npm:engine.io-client@1.6.11",
      "has-binary": "npm:has-binary@0.1.7",
      "indexof": "npm:indexof@0.0.1",
      "object-component": "npm:object-component@0.0.3",
      "parseuri": "npm:parseuri@0.0.4",
      "socket.io-parser": "npm:socket.io-parser@2.2.6",
      "to-array": "npm:to-array@0.1.4"
    },
    "npm:socket.io-parser@2.2.2": {
      "benchmark": "npm:benchmark@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@0.7.4",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.2.6"
    },
    "npm:socket.io-parser@2.2.6": {
      "benchmark": "npm:benchmark@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@2.2.0",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.3.2"
    },
    "npm:socket.io@1.4.8": {
      "debug": "npm:debug@2.2.0",
      "engine.io": "npm:engine.io@1.6.11",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has-binary": "npm:has-binary@0.1.7",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-adapter": "npm:socket.io-adapter@0.4.0",
      "socket.io-client": "npm:socket.io-client@1.4.8",
      "socket.io-parser": "npm:socket.io-parser@2.2.6",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:ultron@1.0.2": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:utf-8-validate@1.2.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@2.4.0"
    },
    "npm:utf8@2.1.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:ws@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferutil": "npm:bufferutil@1.2.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    }
  },
  bundles: {
    "app-build-e9467f4128.js": [
      "animation-main.js",
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "app.router.config.js",
      "authConfig.js",
      "blur-image.js",
      "chat.html!github:systemjs/plugin-text@0.0.3.js",
      "chat.js",
      "contractor.html!github:systemjs/plugin-text@0.0.3.js",
      "contractor.js",
      "customHttpClient.js",
      "customer.html!github:systemjs/plugin-text@0.0.3.js",
      "customer.js",
      "customer2.js",
      "login.html!github:systemjs/plugin-text@0.0.3.js",
      "login.js",
      "logout.html!github:systemjs/plugin-text@0.0.3.js",
      "logout.js",
      "map.html!github:systemjs/plugin-text@0.0.3.js",
      "map.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "nav-bar.js",
      "profile.html!github:systemjs/plugin-text@0.0.3.js",
      "profile.js",
      "resume.html!github:systemjs/plugin-text@0.0.3.js",
      "resume.js",
      "signup.html!github:systemjs/plugin-text@0.0.3.js",
      "signup.js",
      "test.html!github:systemjs/plugin-text@0.0.3.js",
      "test.js",
      "welcome.html!github:systemjs/plugin-text@0.0.3.js",
      "welcome.js"
    ],
    "aurelia-6e5023c8d5.js": [
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.3.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.1.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.6.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.6/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.1.js",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.5.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.5/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.1.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.1/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.2.1.js",
      "npm:aurelia-history@1.0.0-beta.1.2.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.2.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.2/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.1.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.1.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.1/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.2.0.1.js",
      "npm:aurelia-pal-browser@1.0.0-beta.2.0.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.2.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.2/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.2.js",
      "npm:aurelia-path@1.0.0-beta.1.2.2/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.6.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.6/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.2.3.js",
      "npm:aurelia-router@1.0.0-beta.1.2.3/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.7.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.7/aurelia-templating.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js"
    ]
  },
  depCache: {
    "animation-main.js": [
      "./authConfig"
    ],
    "app.js": [
      "bootstrap",
      "aurelia-framework",
      "aurelia-router",
      "./app.router.config",
      "aurelia-auth"
    ],
    "app.router.config.js": [
      "aurelia-auth",
      "aurelia-framework",
      "aurelia-router"
    ],
    "blur-image.js": [
      "aurelia-framework"
    ],
    "chat.js": [
      "aurelia-dependency-injection",
      "aurelia-auth",
      "aurelia-fetch-client",
      "socket.io-client"
    ],
    "contractor.js": [
      "aurelia-framework",
      "aurelia-event-aggregator",
      "aurelia-fetch-client",
      "jquery",
      "datatables"
    ],
    "customer.js": [
      "aurelia-framework",
      "aurelia-fetch-client"
    ],
    "customer2.js": [
      "aurelia-framework",
      "./customHttpClient"
    ],
    "customHttpClient.js": [
      "aurelia-fetch-client",
      "aurelia-framework",
      "aurelia-auth"
    ],
    "login.js": [
      "aurelia-auth",
      "aurelia-framework",
      "jquery"
    ],
    "logout.js": [
      "aurelia-auth",
      "aurelia-framework"
    ],
    "map.js": [
      "aurelia-framework",
      "aurelia-fetch-client"
    ],
    "nav-bar.js": [
      "aurelia-framework",
      "aurelia-auth"
    ],
    "profile.js": [
      "aurelia-auth",
      "./customHttpClient",
      "aurelia-framework",
      "aurelia-fetch-client"
    ],
    "resume.js": [
      "aurelia-framework",
      "aurelia-auth",
      "./customHttpClient",
      "aurelia-fetch-client",
      "jquery",
      "datatables"
    ],
    "signup.js": [
      "aurelia-framework",
      "aurelia-auth"
    ]
  }
});