System.register(['aurelia-framework', 'aurelia-auth'], function (_export) {
	'use strict';

	var inject, AuthService, Signup;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaAuth) {
			AuthService = _aureliaAuth.AuthService;
		}],
		execute: function () {
			Signup = (function () {
				function Signup(auth) {
					_classCallCheck(this, _Signup);

					this.heading = 'Sign Up';
					this.email = '';
					this.password = '';
					this.displayName = '';

					this.auth = auth;
				}

				_createClass(Signup, [{
					key: 'signup',
					value: function signup() {
						return this.auth.signup(this.displayName, this.email, this.password).then(function (response) {
							console.log("signed up");
						});
					}
				}]);

				var _Signup = Signup;
				Signup = inject(AuthService)(Signup) || Signup;
				return Signup;
			})();

			_export('Signup', Signup);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBSWEsTUFBTTs7Ozs7Ozs7OEJBSlgsTUFBTTs7OEJBQ04sV0FBVzs7O0FBR04sU0FBTTtBQUNQLGFBREMsTUFBTSxDQUNMLElBQUksRUFBQzs7O1VBR2xCLE9BQU8sR0FBRyxTQUFTO1VBRW5CLEtBQUssR0FBQyxFQUFFO1VBQ1IsUUFBUSxHQUFDLEVBQUU7VUFDWCxXQUFXLEdBQUMsRUFBRTs7QUFOYixTQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNqQjs7aUJBSFcsTUFBTTs7WUFVWixrQkFBRTtBQUNQLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDbkUsSUFBSSxDQUFDLFVBQUMsUUFBUSxFQUFHO0FBQ2pCLGNBQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDekIsQ0FBQyxDQUFDO01BRUg7OztrQkFoQlcsTUFBTTtBQUFOLFVBQU0sR0FGbEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUVQLE1BQU0sS0FBTixNQUFNO1dBQU4sTUFBTSIsImZpbGUiOiJzaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnYXVyZWxpYS1hdXRoJztcbkBpbmplY3QoQXV0aFNlcnZpY2UpXG5cbmV4cG9ydCBjbGFzcyBTaWdudXB7XG5cdGNvbnN0cnVjdG9yKCBhdXRoKXtcblx0XHR0aGlzLmF1dGggPSBhdXRoO1xuXHR9XG5cdGhlYWRpbmcgPSAnU2lnbiBVcCc7XG5cblx0ZW1haWw9Jyc7XG5cdHBhc3N3b3JkPScnO1xuXHRkaXNwbGF5TmFtZT0nJztcblxuXHRzaWdudXAoKXtcblx0XHRyZXR1cm4gdGhpcy5hdXRoLnNpZ251cCh0aGlzLmRpc3BsYXlOYW1lLCB0aGlzLmVtYWlsLCB0aGlzLnBhc3N3b3JkKVxuXHRcdC50aGVuKChyZXNwb25zZSk9Pntcblx0XHRcdGNvbnNvbGUubG9nKFwic2lnbmVkIHVwXCIpO1xuXHRcdH0pO1xuXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
