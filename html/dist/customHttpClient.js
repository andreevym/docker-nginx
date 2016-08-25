System.register(['aurelia-fetch-client', 'aurelia-framework', 'aurelia-auth'], function (_export) {
    'use strict';

    var HttpClient, inject, AuthService, CustomHttpClient;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_aureliaFetchClient) {
            HttpClient = _aureliaFetchClient.HttpClient;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaAuth) {
            AuthService = _aureliaAuth.AuthService;
        }],
        execute: function () {
            CustomHttpClient = (function (_HttpClient) {
                _inherits(CustomHttpClient, _HttpClient);

                function CustomHttpClient(auth) {
                    _classCallCheck(this, _CustomHttpClient);

                    _get(Object.getPrototypeOf(_CustomHttpClient.prototype), 'constructor', this).call(this);
                    this.configure(function (config) {
                        config.withBaseUrl('http://localhost:4000/').withDefaults({
                            credentials: 'same-origin',

                            headers: {
                                'Accept': 'application/json',
                                'X-Requested-With': 'Fetch'
                            }
                        }).withInterceptor(auth.tokenInterceptor).withInterceptor({
                            request: function request(_request) {
                                console.log(_request);
                                console.log('Requesting ' + _request.method + ' ' + _request.url);
                                return _request;
                            },
                            response: function response(_response) {
                                console.log(_response);
                                console.log('Received ' + _response.status + ' ' + _response.url);
                                return _response;
                            }
                        });
                    });
                }

                var _CustomHttpClient = CustomHttpClient;
                CustomHttpClient = inject(AuthService)(CustomHttpClient) || CustomHttpClient;
                return CustomHttpClient;
            })(HttpClient);

            _export('CustomHttpClient', CustomHttpClient);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUh0dHBDbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lDQUthLGdCQUFnQjs7Ozs7Ozs7Ozs2Q0FMckIsVUFBVTs7dUNBQ1YsTUFBTTs7dUNBQ04sV0FBVzs7O0FBR04sNEJBQWdCOzBCQUFoQixnQkFBZ0I7O0FBQ2QseUJBREYsZ0JBQWdCLENBQ2IsSUFBSSxFQUFFOzs7QUFDZCw2R0FBUTtBQUNSLHdCQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ3JCLDhCQUFNLENBQ0QsV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQ3JDLFlBQVksQ0FBQztBQUNWLHVDQUFXLEVBQUUsYUFBYTs7QUFFMUIsbUNBQU8sRUFBRTtBQUNMLHdDQUFRLEVBQUUsa0JBQWtCO0FBQzVCLGtEQUFrQixFQUFFLE9BQU87NkJBQzlCO3lCQUNKLENBQUMsQ0FJRCxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBRXRDLGVBQWUsQ0FBQztBQUNiLG1DQUFPLEVBQUEsaUJBQUMsUUFBTyxFQUFFO0FBQ2IsdUNBQU8sQ0FBQyxHQUFHLENBQUMsUUFBTyxDQUFDLENBQUM7QUFDckIsdUNBQU8sQ0FBQyxHQUFHLGlCQUFlLFFBQU8sQ0FBQyxNQUFNLFNBQUksUUFBTyxDQUFDLEdBQUcsQ0FBRyxDQUFDO0FBQzNELHVDQUFPLFFBQU8sQ0FBQzs2QkFDbEI7QUFDRCxvQ0FBUSxFQUFBLGtCQUFDLFNBQVEsRUFBRTtBQUNmLHVDQUFPLENBQUMsR0FBRyxDQUFDLFNBQVEsQ0FBQyxDQUFDO0FBQ3RCLHVDQUFPLENBQUMsR0FBRyxlQUFhLFNBQVEsQ0FBQyxNQUFNLFNBQUksU0FBUSxDQUFDLEdBQUcsQ0FBRyxDQUFDO0FBQzNELHVDQUFPLFNBQVEsQ0FBQzs2QkFDbkI7eUJBQ0osQ0FBQyxDQUFDO3FCQUNGLENBQUMsQ0FBQztpQkFDZDs7d0NBaENRLGdCQUFnQjtBQUFoQixnQ0FBZ0IsR0FENUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNQLGdCQUFnQixLQUFoQixnQkFBZ0I7dUJBQWhCLGdCQUFnQjtlQUFTLFVBQVUiLCJmaWxlIjoiY3VzdG9tSHR0cENsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJ2F1cmVsaWEtYXV0aCc7XG5cbkBpbmplY3QoQXV0aFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgQ3VzdG9tSHR0cENsaWVudCBleHRlbmRzIEh0dHBDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKGF1dGgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgIGNvbmZpZ1xuICAgICAgICAgICAgICAgIC53aXRoQmFzZVVybCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwLycpXG4gICAgICAgICAgICAgICAgLndpdGhEZWZhdWx0cyh7XG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgICAgICAvLydzYW1lLW9yaWdpbidcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ0ZldGNoJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL3dlIGNhbGwgb3Vyc2VsdmVzIHRoZSBpbnRlcmNlcHRvciB3aGljaCBjb21lcyB3aXRoIGF1cmVsaWEtYXV0aFxuICAgICAgICAgICAgICAgIC8vb2J2aW91c2x5IHdoZW4gdGhpcyBjdXN0b20gSHR0cCBDbGllbnQgaXMgdXNlZCBmb3Igc2VydmljZXNcbiAgICAgICAgICAgICAgICAvL3doaWNoIGRvbid0IG5lZWQgYSBiZWFyZXIgdG9rZW4sIHlvdSBzaG91bGQgbm90IGluamVjdCB0aGUgdG9rZW4gaW50ZXJjZXB0b3JcbiAgICAgICAgICAgICAgICAud2l0aEludGVyY2VwdG9yKGF1dGgudG9rZW5JbnRlcmNlcHRvcilcbiAgICAgICAgICAgICAgICAvL3N0aWxsIHdlIGNhbiBhdWdtZW50IHRoZSBjdXN0b20gSHR0cENsaWVudCB3aXRoIG93biBpbnRlcmNlcHRvcnNcbiAgICAgICAgICAgICAgICAud2l0aEludGVyY2VwdG9yKHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZXF1ZXN0aW5nICR7cmVxdWVzdC5tZXRob2R9ICR7cmVxdWVzdC51cmx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdDsgLy8geW91IGNhbiByZXR1cm4gYSBtb2RpZmllZCBSZXF1ZXN0LCBvciB5b3UgY2FuIHNob3J0LWNpcmN1aXQgdGhlIHJlcXVlc3QgYnkgcmV0dXJuaW5nIGEgUmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS51cmx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7IC8vIHlvdSBjYW4gcmV0dXJuIGEgbW9kaWZpZWQgUmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
