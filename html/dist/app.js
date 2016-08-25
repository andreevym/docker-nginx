System.register(['bootstrap', 'aurelia-framework', 'aurelia-router', './app.router.config', 'aurelia-auth'], function (_export) {
    'use strict';

    var inject, Router, AppRouterConfig, FetchConfig, App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_bootstrap) {}, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_appRouterConfig) {
            AppRouterConfig = _appRouterConfig['default'];
        }, function (_aureliaAuth) {
            FetchConfig = _aureliaAuth.FetchConfig;
        }],
        execute: function () {
            App = (function () {
                function App(router, fetchConfig, appRouterConfig) {
                    _classCallCheck(this, _App);

                    this.router = router;
                    this.appRouterConfig = appRouterConfig;
                    this.fetchConfig = fetchConfig;
                }

                _createClass(App, [{
                    key: 'activate',
                    value: function activate() {
                        this.appRouterConfig.configure();
                        this.fetchConfig.configure();
                    }
                }]);

                var _App = App;
                App = inject(Router, FetchConfig, AppRouterConfig)(App) || App;
                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7c0RBYWEsR0FBRzs7Ozs7Ozs7dUNBVFIsTUFBTTs7b0NBQ04sTUFBTTs7Ozt1Q0FJTixXQUFXOzs7QUFJTixlQUFHO0FBRUQseUJBRkYsR0FBRyxDQUVBLE1BQU0sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFOzs7QUFDOUMsd0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLHdCQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2Qyx3QkFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7aUJBQ2xDOzs2QkFOUSxHQUFHOzsyQkFRSixvQkFBRztBQUNQLDRCQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2pDLDRCQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO3FCQUNoQzs7OzJCQVhRLEdBQUc7QUFBSCxtQkFBRyxHQURmLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUNoQyxHQUFHLEtBQUgsR0FBRzt1QkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwJztcbi8qaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzISc7XG4qLy8qaW1wb3J0ICdib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5jc3MhJzsqL1xuXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCBBcHBSb3V0ZXJDb25maWcgZnJvbSAnLi9hcHAucm91dGVyLmNvbmZpZyc7XG4vL2ltcG9ydCBIdHRwQ2xpZW50Q29uZmlnIGZyb20gJ2F1cmVsaWEtYXV0aC9hcHAuaHR0cENsaWVudC5jb25maWcnO1xuLy9pbXBvcnQgRmV0Y2hDb25maWcgZnJvbSAnYXVyZWxpYS1hdXRoL2FwcC5mZXRjaC1odHRwQ2xpZW50LmNvbmZpZyc7XG5pbXBvcnQge0ZldGNoQ29uZmlnfSBmcm9tICdhdXJlbGlhLWF1dGgnO1xuXG5cbkBpbmplY3QoUm91dGVyLCBGZXRjaENvbmZpZywgQXBwUm91dGVyQ29uZmlnKVxuZXhwb3J0IGNsYXNzIEFwcCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIGZldGNoQ29uZmlnLCBhcHBSb3V0ZXJDb25maWcpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMuYXBwUm91dGVyQ29uZmlnID0gYXBwUm91dGVyQ29uZmlnO1xuICAgICAgICB0aGlzLmZldGNoQ29uZmlnID0gZmV0Y2hDb25maWc7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuYXBwUm91dGVyQ29uZmlnLmNvbmZpZ3VyZSgpO1xuICAgICAgICB0aGlzLmZldGNoQ29uZmlnLmNvbmZpZ3VyZSgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
