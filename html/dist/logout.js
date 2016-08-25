System.register(['aurelia-auth', 'aurelia-framework'], function (_export) {
	'use strict';

	var AuthService, inject, Logout;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaAuth) {
			AuthService = _aureliaAuth.AuthService;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}],
		execute: function () {
			Logout = (function () {
				function Logout(authService) {
					_classCallCheck(this, _Logout);

					this.authService = authService;
				}

				_createClass(Logout, [{
					key: 'activate',
					value: function activate() {
						this.authService.logout("#/").then(function (response) {
							console.log("ok logged out on  logout.js");
						})['catch'](function (err) {
							console.log("error logged out  logout.js");
						});
					}
				}]);

				var _Logout = Logout;
				Logout = inject(AuthService)(Logout) || Logout;
				return Logout;
			})();

			_export('Logout', Logout);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBTWEsTUFBTTs7Ozs7Ozs7OEJBTlgsV0FBVzs7OEJBQ1gsTUFBTTs7O0FBS0QsU0FBTTtBQUNQLGFBREMsTUFBTSxDQUNOLFdBQVcsRUFBQzs7O0FBQ3ZCLFNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQy9COztpQkFIVyxNQUFNOztZQUtULG9CQUFFO0FBQ1YsVUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQzVCLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBRTtBQUNmLGNBQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztPQUMzQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBLEdBQUcsRUFBRTtBQUNYLGNBQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztPQUUzQyxDQUFDLENBQUM7TUFDSDs7O2tCQWRXLE1BQU07QUFBTixVQUFNLEdBRmxCLE1BQU0sQ0FBQyxXQUFXLENBQUUsQ0FFUixNQUFNLEtBQU4sTUFBTTtXQUFOLE1BQU0iLCJmaWxlIjoibG9nb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnYXVyZWxpYS1hdXRoJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cblxuQGluamVjdChBdXRoU2VydmljZSApXG5cbmV4cG9ydCBjbGFzcyBMb2dvdXR7XG5cdGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlKXtcblx0XHR0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG5cdH07XG5cblx0IGFjdGl2YXRlKCl7XG5cdFx0dGhpcy5hdXRoU2VydmljZS5sb2dvdXQoXCIjL1wiKVxuXHRcdC50aGVuKHJlc3BvbnNlPT57XG5cdFx0XHRjb25zb2xlLmxvZyhcIm9rIGxvZ2dlZCBvdXQgb24gIGxvZ291dC5qc1wiKTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnI9Pntcblx0XHRcdGNvbnNvbGUubG9nKFwiZXJyb3IgbG9nZ2VkIG91dCAgbG9nb3V0LmpzXCIpO1xuXG5cdFx0fSk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
