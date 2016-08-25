System.register(['aurelia-auth', 'aurelia-framework', 'jquery'], function (_export) {
	'use strict';

	var AuthService, inject, $, Login;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaAuth) {
			AuthService = _aureliaAuth.AuthService;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_jquery) {
			$ = _jquery['default'];
		}],
		execute: function () {
			Login = (function () {
				function Login(auth) {
					_classCallCheck(this, _Login);

					this.heading = 'Login';
					this.email = '';
					this.password = '';

					this.auth = auth;
				}

				_createClass(Login, [{
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
						return this.auth.authenticate(name, false, null).then(function (response) {});
					}
				}]);

				var _Login = Login;
				Login = inject(AuthService)(Login) || Login;
				return Login;
			})();

			_export('Login', Login);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2QkFLYSxLQUFLOzs7Ozs7Ozs4QkFMVixXQUFXOzs4QkFDWCxNQUFNOzs7OztBQUlELFFBQUs7QUFDTixhQURDLEtBQUssQ0FDTCxJQUFJLEVBQUM7OztVQUlqQixPQUFPLEdBQUcsT0FBTztVQUVqQixLQUFLLEdBQUMsRUFBRTtVQUNSLFFBQVEsR0FBQyxFQUFFOztBQU5WLFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2pCOztpQkFIVyxLQUFLOztZQVNaLGlCQUFFOztBQUdOLFVBQUksS0FBSyxHQUFHLDRCQUE0QixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDckYsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FFaEQsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFFO0FBQ2YsY0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQztPQUMxQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBLEdBQUcsRUFBRTtBQUNYLFVBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDLEVBQUM7QUFDMUIsZUFBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO09BRUgsQ0FBQyxDQUFDO01BQ0g7OztZQUVXLHNCQUFDLElBQUksRUFBQztBQUNqQixhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQy9DLElBQUksQ0FBQyxVQUFDLFFBQVEsRUFBRyxFQUNqQixDQUFDLENBQUM7TUFDSDs7O2lCQTlCVyxLQUFLO0FBQUwsU0FBSyxHQUZqQixNQUFNLENBQUMsV0FBVyxDQUFFLENBRVIsS0FBSyxLQUFMLEtBQUs7V0FBTCxLQUFLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnYXVyZWxpYS1hdXRoJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuQGluamVjdChBdXRoU2VydmljZSApXG5cbmV4cG9ydCBjbGFzcyBMb2dpbntcblx0Y29uc3RydWN0b3IoYXV0aCl7XG5cdFx0dGhpcy5hdXRoID0gYXV0aDtcblx0fTtcblxuXHRoZWFkaW5nID0gJ0xvZ2luJztcblxuXHRlbWFpbD0nJztcblx0cGFzc3dvcmQ9Jyc7XG5cdGxvZ2luKCl7XG5cblxuXHRcdHZhciBjcmVkcyA9IFwiZ3JhbnRfdHlwZT1wYXNzd29yZCZlbWFpbD1cIiArIHRoaXMuZW1haWwgKyBcIiZwYXNzd29yZD1cIiArIHRoaXMucGFzc3dvcmQ7XG5cdFx0cmV0dXJuIHRoaXMuYXV0aC5sb2dpbih0aGlzLmVtYWlsLCB0aGlzLnBhc3N3b3JkKVxuXHRcdC8vcmV0dXJuIHRoaXMuYXV0aC5sb2dpbihjcmVkcylcblx0XHQudGhlbihyZXNwb25zZT0+e1xuXHRcdFx0Y29uc29sZS5sb2coXCJzdWNjZXNzIGxvZ2dlZCBcIiArIHJlc3BvbnNlKTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdGVyci5qc29uKCkudGhlbihmdW5jdGlvbihlKXtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJsb2dpbiBmYWlsdXJlIDogXCIgKyBlLm1lc3NhZ2UpO1xuXHRcdFx0fSk7XG5cblx0XHR9KTtcblx0fTtcblxuXHRhdXRoZW50aWNhdGUobmFtZSl7XG5cdFx0cmV0dXJuIHRoaXMuYXV0aC5hdXRoZW50aWNhdGUobmFtZSwgZmFsc2UsIG51bGwpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKT0+e1xuXHRcdH0pO1xuXHR9XG5cbn1cblxuLy9cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
