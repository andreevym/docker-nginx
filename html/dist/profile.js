System.register(['aurelia-auth', './customHttpClient', 'aurelia-framework', 'aurelia-fetch-client'], function (_export) {
	'use strict';

	var AuthService, CustomHttpClient, inject, json, Profile;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaAuth) {
			AuthService = _aureliaAuth.AuthService;
		}, function (_customHttpClient) {
			CustomHttpClient = _customHttpClient.CustomHttpClient;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaFetchClient) {
			json = _aureliaFetchClient.json;
		}],
		execute: function () {
			Profile = (function () {
				function Profile(auth, http, json) {
					_classCallCheck(this, _Profile);

					this.heading = 'Profile';
					this.email = '';
					this.password = '';
					this.displayName = '';

					this.auth = auth;
					this.http = http;
					this.profile = null;
				}

				_createClass(Profile, [{
					key: 'activate',
					value: function activate() {
						var _this = this;

						return this.auth.getMe().then(function (data) {
							_this.profile = data;
						});
					}
				}, {
					key: 'update',
					value: function update() {
						this.http.fetch('api/users', {
							method: 'put',
							body: json({
								user: this.profile,
								email: this.emailInput.value,
								displayName: this.displayInput.value

							})
						}).then(function (response) {
							return response.json();
						}).then(function (savedComment) {
							alert('Profile Updated!');
						})['catch'](function (error) {
							alert('Error saving comment!' + error);
						});
					}
				}, {
					key: 'link',
					value: function link(provider) {
						var _this2 = this;

						return this.auth.authenticate(provider, true, null).then(function () {
							return _this2.auth.getMe();
						}).then(function (data) {
							_this2.profile = data;
						})['catch'](function (err) {
							console.log("profile failure");
						});
					}
				}]);

				var _Profile = Profile;
				Profile = inject(AuthService, CustomHttpClient, json)(Profile) || Profile;
				return Profile;
			})();

			_export('Profile', Profile);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tEQU1hLE9BQU87Ozs7Ozs7OzhCQU5aLFdBQVc7O3dDQUNYLGdCQUFnQjs7OEJBQ2hCLE1BQU07OzhCQUNOLElBQUk7OztBQUdDLFVBQU87QUFDUixhQURDLE9BQU8sQ0FDUCxJQUFJLEVBQUcsSUFBSSxFQUFFLElBQUksRUFBQzs7O1VBVzlCLE9BQU8sR0FBRyxTQUFTO1VBa0NuQixLQUFLLEdBQUMsRUFBRTtVQUNSLFFBQVEsR0FBQyxFQUFFO1VBQ1gsV0FBVyxHQUFHLEVBQUU7O0FBOUNmLFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOztpQkFMVyxPQUFPOztZQU1YLG9CQUFFOzs7QUFDVCxhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQ3ZCLElBQUksQ0FBQyxVQUFBLElBQUksRUFBRTtBQUNYLGFBQUssT0FBTyxHQUFHLElBQUksQ0FBQztPQUNwQixDQUFDLENBQUM7TUFDSDs7O1lBRUssa0JBQUU7QUFDTixVQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7QUFDNUIsYUFBTSxFQUFFLEtBQUs7QUFDYixXQUFJLEVBQUUsSUFBSSxDQUFDO0FBQ1YsWUFBSSxFQUFHLElBQUksQ0FBQyxPQUFPO0FBQ25CLGFBQUssRUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7QUFDN0IsbUJBQVcsRUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7O1FBRXJDLENBQUM7T0FDRCxDQUFDLENBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUTtjQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7T0FBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLFlBQVksRUFBSTtBQUNyQixZQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtPQUN6QixDQUFDLFNBQ0ksQ0FBQyxVQUFBLEtBQUssRUFBSTtBQUNmLFlBQUssQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsQ0FBQztPQUN2QyxDQUFDLENBQUM7TUFDTDs7O1lBRUcsY0FBQyxRQUFRLEVBQUM7OztBQUNiLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FLbEQsSUFBSSxDQUFDO2NBQUssT0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO09BQUEsQ0FBQyxDQUM1QixJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUU7QUFDWCxjQUFLLE9BQU8sR0FBRyxJQUFJLENBQUM7T0FDcEIsQ0FBQyxTQUNVLENBQUMsVUFBQSxHQUFHLEVBQUU7QUFDakIsY0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO09BQy9CLENBQUMsQ0FBQztNQUNIOzs7bUJBN0NXLE9BQU87QUFBUCxXQUFPLEdBRm5CLE1BQU0sQ0FBQyxXQUFXLEVBQUcsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBRWhDLE9BQU8sS0FBUCxPQUFPO1dBQVAsT0FBTyIsImZpbGUiOiJwcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnYXVyZWxpYS1hdXRoJztcbmltcG9ydCB7Q3VzdG9tSHR0cENsaWVudH0gZnJvbSAnLi9jdXN0b21IdHRwQ2xpZW50JztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge2pzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbkBpbmplY3QoQXV0aFNlcnZpY2UgLCBDdXN0b21IdHRwQ2xpZW50LCBqc29uKVxuLy9kZWxldGlvbiBvZiBpbnB1dHMgLS0gaHR0cDovL2Jsb2cud2lsbGlhbWhheWVzLm9yZy8yMDE1LzA4L2R5bmFtaWMtaW5wdXQtbGlzdC1pbi1hdXJlbGlhLmh0bWxcbmV4cG9ydCBjbGFzcyBQcm9maWxle1xuXHRjb25zdHJ1Y3RvcihhdXRoICwgaHR0cCwganNvbil7XG5cdFx0dGhpcy5hdXRoID0gYXV0aDtcblx0XHR0aGlzLmh0dHAgPSBodHRwO1xuXHRcdHRoaXMucHJvZmlsZSA9IG51bGw7XG5cdH07XG5cdGFjdGl2YXRlKCl7XG5cdFx0cmV0dXJuIHRoaXMuYXV0aC5nZXRNZSgpXG5cdFx0LnRoZW4oZGF0YT0+e1xuXHRcdFx0dGhpcy5wcm9maWxlID0gZGF0YTtcblx0XHR9KTtcblx0fVxuXHRoZWFkaW5nID0gJ1Byb2ZpbGUnO1xuXHR1cGRhdGUoKXtcblx0XHQgdGhpcy5odHRwLmZldGNoKCdhcGkvdXNlcnMnLCB7XG5cdFx0XHQgbWV0aG9kOiAncHV0Jyxcblx0XHRcdCBib2R5OiBqc29uKHtcblx0XHRcdFx0IHVzZXIgOiB0aGlzLnByb2ZpbGUsXG5cdFx0XHRcdCBlbWFpbCA6IHRoaXMuZW1haWxJbnB1dC52YWx1ZSxcblx0XHRcdFx0IGRpc3BsYXlOYW1lIDogdGhpcy5kaXNwbGF5SW5wdXQudmFsdWVcblxuXHRcdFx0IH0pXG5cdFx0XHQgfSlcblx0XHRcdCAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0XHQgLnRoZW4oc2F2ZWRDb21tZW50ID0+IHtcblx0XHRcdFx0IGFsZXJ0KCdQcm9maWxlIFVwZGF0ZWQhJylcblx0XHRcdCB9KVxuXHRcdFx0IC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRcdCBhbGVydCgnRXJyb3Igc2F2aW5nIGNvbW1lbnQhJyArIGVycm9yKTtcblx0XHRcdCB9KTtcblx0fVxuXG5cdGxpbmsocHJvdmlkZXIpe1xuXHRcdHJldHVybiB0aGlzLmF1dGguYXV0aGVudGljYXRlKHByb3ZpZGVyLCB0cnVlLCBudWxsKVxuXHRcdC8qLnRoZW4oKHJlc3BvbnNlKT0+e1xuXHRcdFx0Y29uc29sZS5sb2coXCJhdXRoIHJlc3BvbnNlIFwiICsgcmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIHRoaXMuYXV0aC5nZXRNZSgpO1xuXHRcdH0pKi9cblx0XHQudGhlbigoKT0+IHRoaXMuYXV0aC5nZXRNZSgpKVxuXHRcdC50aGVuKGRhdGE9Pntcblx0XHRcdHRoaXMucHJvZmlsZSA9IGRhdGE7XG5cdFx0fSlcbiAgICAgICAgLmNhdGNoKGVycj0+e1xuXHRcdFx0Y29uc29sZS5sb2coXCJwcm9maWxlIGZhaWx1cmVcIik7XG5cdFx0fSk7XG5cdH1cblx0ZW1haWw9Jyc7XG5cdHBhc3N3b3JkPScnO1xuXHRkaXNwbGF5TmFtZSA9ICcnO1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
