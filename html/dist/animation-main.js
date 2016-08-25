System.register(['./authConfig'], function (_export) {
  'use strict';

  var config;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-animator-css').plugin('aurelia-binding').plugin('aurelia-auth', function (baseConfig) {
      baseConfig.configure(config);
    });

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_authConfig) {
      config = _authConfig['default'];
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi1tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUN2QixrQkFBa0IsRUFBRSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FDOUIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQ3pCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsVUFBQyxVQUFVLEVBQUc7QUFDckMsZ0JBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0IsQ0FBQyxDQUFDOztBQUVMLFdBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2FBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtLQUFBLENBQUMsQ0FBQztHQUN4QyIsImZpbGUiOiJhbmltYXRpb24tbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi9hdXRoQ29uZmlnJztcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoKVxuICAgIC5wbHVnaW4oJ2F1cmVsaWEtYW5pbWF0b3ItY3NzJylcbiAgICAucGx1Z2luKCdhdXJlbGlhLWJpbmRpbmcnKVxuICAgIC5wbHVnaW4oJ2F1cmVsaWEtYXV0aCcsIChiYXNlQ29uZmlnKT0+eyAgIC8vdGhlIG5hbWUgb2YgcGx1Z2luIGJlY29tZXMgJ3BhdWx2YW5ibGFkZWwvYXVyZWxpYS1hdXRoJ1xuICAgIFx0YmFzZUNvbmZpZy5jb25maWd1cmUoY29uZmlnKTtcbiAgICB9KTtcblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbihhID0+IGEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
