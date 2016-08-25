System.register(['aurelia-framework', 'aurelia-auth'], function (_export) {
    'use strict';

    var bindable, inject, BindingEngine, AuthService, NavBar;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
            BindingEngine = _aureliaFramework.BindingEngine;
        }, function (_aureliaAuth) {
            AuthService = _aureliaAuth.AuthService;
        }],
        execute: function () {
            NavBar = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(NavBar, [{
                    key: 'router',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                function NavBar(auth, bindingEngine) {
                    var _this = this;

                    _classCallCheck(this, _NavBar);

                    this._isAuthenticated = false;
                    this.displayName = "";
                    this.picture = "";

                    _defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

                    this.subscription = {};

                    this.auth = auth;
                    this.bindingEngine = bindingEngine;
                    this._isAuthenticated = this.auth.isAuthenticated();
                    this.subscription = bindingEngine.propertyObserver(this, 'isAuthenticated').subscribe(function (newValue, oldValue) {
                        if (_this.isAuthenticated) {
                            _this.auth.getMe().then(function (data) {
                                return _this.displayName = data.displayName;
                            });
                        }
                    });
                }

                _createDecoratedClass(NavBar, [{
                    key: 'deactivate',
                    value: function deactivate() {
                        this.subscription.dispose();
                    }
                }, {
                    key: 'login',
                    value: function login() {
                        var creds = "grant_type=password&email=" + this.email + "&password=" + this.password;
                        return this.auth.login(this.email, this.password).then(function (response) {
                            console.log("success logged " + response);
                        })['catch'](function (err) {
                            err.json().then(function (e) {
                                console.log("login failure : " + e.message);
                            });
                        });
                    }
                }, {
                    key: 'authenticate',
                    value: function authenticate(name) {
                        return this.auth.authenticate(name, false, null).then(function (response) {
                            console.log(response);
                        });
                    }
                }, {
                    key: 'signup',
                    value: function signup() {
                        return this.auth.signup(this.displayName, this.email, this.password).then(function (response) {});
                    }
                }, {
                    key: 'attached',
                    value: function attached() {
                        var _this2 = this;

                        this.auth.getMe().then(function (data) {
                            _this2.displayName = data.displayName;
                            _this2.picture = data.picture;
                        });
                        $(".email-signup").hide();
                        $("#signup-box-link").click(function () {
                            $(".email-login").fadeOut(10);
                            $(".email-signup").delay(10).fadeIn(10);
                            $("#login-box-link").removeClass("active");
                            $("#signup-box-link").addClass("active");
                        });
                        $("#login-box-link").click(function () {
                            $(".email-login").delay(10).fadeIn(10);;
                            $(".email-signup").fadeOut(10);
                            $("#login-box-link").addClass("active");
                            $("#signup-box-link").removeClass("active");
                        });
                        $("#login-menu").on("click", function () {
                            $(".login-box").toggle();
                        });
                    }
                }, {
                    key: 'isAuthenticated',
                    get: function get() {
                        return this.auth.isAuthenticated();
                    }
                }], null, _instanceInitializers);

                var _NavBar = NavBar;
                NavBar = inject(AuthService, BindingEngine)(NavBar) || NavBar;
                return NavBar;
            })();

            _export('NavBar', NavBar);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NEQU1hLE1BQU07Ozs7Ozs7Ozs7eUNBTlgsUUFBUTt1Q0FDUixNQUFNOzhDQUVOLGFBQWE7O3VDQURiLFdBQVc7OztBQUlOLGtCQUFNOzs7O3NDQUFOLE1BQU07O2lDQUlkLFFBQVE7OytCQUFVLElBQUk7Ozs7O0FBRVoseUJBTkYsTUFBTSxDQU1ILElBQUksRUFBRSxhQUFhLEVBQUU7Ozs7O3lCQUxqQyxnQkFBZ0IsR0FBRyxLQUFLO3lCQUN4QixXQUFXLEdBQUcsRUFBRTt5QkFDaEIsT0FBTyxHQUFHLEVBQUU7Ozs7eUJBRVosWUFBWSxHQUFHLEVBQUU7O0FBRWIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLHdCQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNuQyx3QkFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDcEQsd0JBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUN0RSxTQUFTLENBQUMsVUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFLO0FBQy9CLDRCQUFJLE1BQUssZUFBZSxFQUFFO0FBQ3RCLGtDQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDM0IsdUNBQU8sTUFBSyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs2QkFDOUMsQ0FBQyxDQUFDO3lCQUNOO3FCQUNKLENBQUMsQ0FBQztpQkFDVjs7c0NBbEJRLE1BQU07OzJCQXdCTCxzQkFBRztBQUNULDRCQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUMvQjs7OzJCQUNJLGlCQUFFO0FBQ1AsNEJBQUksS0FBSyxHQUFHLDRCQUE0QixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDckYsK0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBRWhELElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBRTtBQUNmLG1DQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO3lCQUMxQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBLEdBQUcsRUFBRTtBQUNYLCtCQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxFQUFDO0FBQzFCLHVDQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs2QkFDNUMsQ0FBQyxDQUFDO3lCQUVILENBQUMsQ0FBQztxQkFDSDs7OzJCQUVZLHNCQUFDLElBQUksRUFBQztBQUNsQiwrQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUMvQyxJQUFJLENBQUMsVUFBQyxRQUFRLEVBQUc7QUFHZCxtQ0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDekIsQ0FBQyxDQUFDO3FCQUNIOzs7MkJBRU0sa0JBQUU7QUFDTiwrQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUNuRSxJQUFJLENBQUMsVUFBQyxRQUFRLEVBQUcsRUFDakIsQ0FBQyxDQUFDO3FCQUNKOzs7MkJBRU8sb0JBQUU7OztBQUNSLDRCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUNsQixJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUU7QUFDUixtQ0FBSyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNwQyxtQ0FBSyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDL0IsQ0FBQyxDQUFDO0FBQ0QseUJBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMxQix5QkFBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVU7QUFDcEMsNkJBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDOUIsNkJBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLDZCQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsNkJBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDMUMsQ0FBQyxDQUFDO0FBQ0gseUJBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFVO0FBQ25DLDZCQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLDZCQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLDZCQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsNkJBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDN0MsQ0FBQyxDQUFDO0FBQ0gseUJBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVU7QUFDcEMsNkJBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt5QkFDMUIsQ0FBQyxDQUFDO3FCQUNKOzs7eUJBM0RpQixlQUFHO0FBQ2xCLCtCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQ3RDOzs7OEJBdEJRLE1BQU07QUFBTixzQkFBTSxHQURsQixNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUN0QixNQUFNLEtBQU4sTUFBTTt1QkFBTixNQUFNIiwiZmlsZSI6Im5hdi1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJ2F1cmVsaWEtYXV0aCc7XG5pbXBvcnQge0JpbmRpbmdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChBdXRoU2VydmljZSwgQmluZGluZ0VuZ2luZSlcbmV4cG9ydCBjbGFzcyBOYXZCYXIge1xuICAgIF9pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICBkaXNwbGF5TmFtZSA9IFwiXCI7XG4gICAgcGljdHVyZSA9IFwiXCI7XG4gICAgQGJpbmRhYmxlIHJvdXRlciA9IG51bGw7XG4gICAgc3Vic2NyaXB0aW9uID0ge307XG4gICAgY29uc3RydWN0b3IoYXV0aCwgYmluZGluZ0VuZ2luZSkge1xuICAgICAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgICAgICB0aGlzLmJpbmRpbmdFbmdpbmUgPSBiaW5kaW5nRW5naW5lO1xuICAgICAgICB0aGlzLl9pc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gYmluZGluZ0VuZ2luZS5wcm9wZXJ0eU9ic2VydmVyKHRoaXMsICdpc0F1dGhlbnRpY2F0ZWQnKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aC5nZXRNZSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5TmFtZSA9IGRhdGEuZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgfVxuXG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgIH1cbiAgICBsb2dpbigpe1xuICBcdFx0dmFyIGNyZWRzID0gXCJncmFudF90eXBlPXBhc3N3b3JkJmVtYWlsPVwiICsgdGhpcy5lbWFpbCArIFwiJnBhc3N3b3JkPVwiICsgdGhpcy5wYXNzd29yZDtcbiAgXHRcdHJldHVybiB0aGlzLmF1dGgubG9naW4odGhpcy5lbWFpbCwgdGhpcy5wYXNzd29yZClcbiAgXHRcdC8vcmV0dXJuIHRoaXMuYXV0aC5sb2dpbihjcmVkcylcbiAgXHRcdC50aGVuKHJlc3BvbnNlPT57XG4gIFx0XHRcdGNvbnNvbGUubG9nKFwic3VjY2VzcyBsb2dnZWQgXCIgKyByZXNwb25zZSk7XG4gIFx0XHR9KVxuICBcdFx0LmNhdGNoKGVycj0+e1xuICBcdFx0XHRlcnIuanNvbigpLnRoZW4oZnVuY3Rpb24oZSl7XG4gIFx0XHRcdFx0Y29uc29sZS5sb2coXCJsb2dpbiBmYWlsdXJlIDogXCIgKyBlLm1lc3NhZ2UpO1xuICBcdFx0XHR9KTtcblxuICBcdFx0fSk7XG4gIFx0fVxuXG4gICAgYXV0aGVudGljYXRlKG5hbWUpe1xuICBcdFx0cmV0dXJuIHRoaXMuYXV0aC5hdXRoZW50aWNhdGUobmFtZSwgZmFsc2UsIG51bGwpXG4gIFx0XHQudGhlbigocmVzcG9uc2UpPT57XG4gICAgICAgIC8vc2V0VG9rZW4ocmVzcG9uc2UudG9rZW4pO1xuICAgICAgICAvL3Jlc3BvbmRzIHdpdGggdGhlIHVzZXIgdG9rZW5cbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICBcdFx0fSk7XG4gIFx0fVxuXG4gICAgc2lnbnVwKCl7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoLnNpZ251cCh0aGlzLmRpc3BsYXlOYW1lLCB0aGlzLmVtYWlsLCB0aGlzLnBhc3N3b3JkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKXtcbiAgICAgIHRoaXMuYXV0aC5nZXRNZSgpXG4gIFx0XHQudGhlbihkYXRhPT57XG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBkYXRhLmRpc3BsYXlOYW1lO1xuICAgICAgICB0aGlzLnBpY3R1cmUgPSBkYXRhLnBpY3R1cmU7XG4gIFx0XHR9KTtcbiAgICAgICQoXCIuZW1haWwtc2lnbnVwXCIpLmhpZGUoKTtcbiAgICAgICQoXCIjc2lnbnVwLWJveC1saW5rXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIuZW1haWwtbG9naW5cIikuZmFkZU91dCgxMCk7XG4gICAgICAgICQoXCIuZW1haWwtc2lnbnVwXCIpLmRlbGF5KDEwKS5mYWRlSW4oMTApO1xuICAgICAgICAkKFwiI2xvZ2luLWJveC1saW5rXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwiI3NpZ251cC1ib3gtbGlua1wiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgICAgJChcIiNsb2dpbi1ib3gtbGlua1wiKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmVtYWlsLWxvZ2luXCIpLmRlbGF5KDEwKS5mYWRlSW4oMTApOztcbiAgICAgICAgJChcIi5lbWFpbC1zaWdudXBcIikuZmFkZU91dCgxMCk7XG4gICAgICAgICQoXCIjbG9naW4tYm94LWxpbmtcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCIjc2lnbnVwLWJveC1saW5rXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgICAkKFwiI2xvZ2luLW1lbnVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgJChcIi5sb2dpbi1ib3hcIikudG9nZ2xlKCk7XG4gICAgICAgfSk7XG4gICAgIH1cblxuICAgfVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
