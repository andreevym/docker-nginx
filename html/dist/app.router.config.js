System.register(['aurelia-auth', 'aurelia-framework', 'aurelia-router'], function (_export) {
	'use strict';

	var AuthorizeStep, inject, Router, _default;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaAuth) {
			AuthorizeStep = _aureliaAuth.AuthorizeStep;
		}, function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}],
		execute: function () {
			_default = (function () {
				function _default(router) {
					_classCallCheck(this, _default2);

					this.router = router;
				}

				_createClass(_default, [{
					key: 'configure',
					value: function configure() {
						var appRouterConfig = function appRouterConfig(config) {
							config.title = 'RX';
							config.addPipelineStep('authorize', AuthorizeStep);

							config.map([{ route: '', moduleId: './welcome', nav: false, title: 'welcome' }, { route: 'signup', moduleId: './signup', nav: false, title: 'Signup' }, { route: 'contractor', moduleId: './contractor', nav: false, title: 'Contractor' }, { route: 'resume', moduleId: './resume', nav: false, title: 'Resumes' }, { route: 'chat', moduleId: './chat', nav: false, title: 'Chat' }, { route: 'leads', moduleId: './leads', nav: false, title: 'Leads' }, { route: 'job', moduleId: './job', nav: false, title: 'Jobs' }, { route: 'login', moduleId: './login', nav: false, title: 'Login' }, { route: 'logout', moduleId: './logout', nav: false, title: 'Logout' }, { route: 'profile', moduleId: './profile', nav: false, title: 'Profile' }]);
						};

						this.router.configure(appRouterConfig);
					}
				}]);

				var _default2 = _default;
				_default = inject(Router)(_default) || _default;
				return _default;
			})();

			_export('default', _default);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXIuY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2dDQUFRLGFBQWE7OzhCQUNiLE1BQU07OzJCQUNOLE1BQU07Ozs7QUFLRixzQkFBQyxNQUFNLEVBQUM7OztBQUNsQixTQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUNyQjs7OztZQUNRLHFCQUFFO0FBQ1YsVUFBSSxlQUFlLEdBQUcsU0FBbEIsZUFBZSxDQUFZLE1BQU0sRUFBQztBQUNyQyxhQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNwQixhQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQzs7QUFFbkQsYUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNWLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRyxRQUFRLEVBQUUsV0FBVyxFQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUN2RCxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVMsUUFBUSxFQUFFLFVBQVUsRUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxRQUFRLEVBQUUsRUFFMUYsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFTLFFBQVEsRUFBRSxjQUFjLEVBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsWUFBWSxFQUFFLEVBQzlGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBUyxRQUFRLEVBQUUsVUFBVSxFQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUNuRixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVMsUUFBUSxFQUFFLFFBQVEsRUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLEVBQUUsRUFDNUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFTLFFBQVEsRUFBRSxTQUFTLEVBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFFLEVBQ25GLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBRSxFQUMxRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVMsUUFBUSxFQUFFLFNBQVMsRUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxPQUFPLEVBQUUsRUFDL0UsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFTLFFBQVEsRUFBRSxVQUFVLEVBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLEVBQ2xGLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBUyxRQUFRLEVBQUUsV0FBVyxFQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxDQUVwRixDQUFDLENBQUM7T0FDSCxDQUFDOztBQUVILFVBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO01BQ3ZDOzs7O2VBNUJELE1BQU0sQ0FBQyxNQUFNLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRlci5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dGhvcml6ZVN0ZXB9IGZyb20gJ2F1cmVsaWEtYXV0aCc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuQGluamVjdChSb3V0ZXIpXG5leHBvcnQgZGVmYXVsdCBjbGFzc3tcblxuXHRjb25zdHJ1Y3Rvcihyb3V0ZXIpe1xuXHRcdHRoaXMucm91dGVyID0gcm91dGVyO1xuXHR9XG5cdGNvbmZpZ3VyZSgpe1xuXHRcdHZhciBhcHBSb3V0ZXJDb25maWcgPSBmdW5jdGlvbihjb25maWcpe1xuXHRcdFx0Y29uZmlnLnRpdGxlID0gJ1JYJztcblx0XHRcdGNvbmZpZy5hZGRQaXBlbGluZVN0ZXAoJ2F1dGhvcml6ZScsIEF1dGhvcml6ZVN0ZXApOyAvLyBBZGQgYSByb3V0ZSBmaWx0ZXIgdG8gdGhlIGF1dGhvcml6ZSBleHRlbnNpYmlsaXR5IHBvaW50LlxuXG5cdFx0XHRjb25maWcubWFwKFtcblx0XHRcdFx0eyByb3V0ZTogJycsICBtb2R1bGVJZDogJy4vd2VsY29tZScsICBuYXY6IGZhbHNlLCB0aXRsZTond2VsY29tZScgfSxcbiAgICAgICAgICAgICAgICB7IHJvdXRlOiAnc2lnbnVwJywgICAgICAgIG1vZHVsZUlkOiAnLi9zaWdudXAnLCAgICAgICBuYXY6IGZhbHNlLCB0aXRsZTonU2lnbnVwJyB9LFxuXHRcdFx0XHRcdFx0XHRcdC8veyByb3V0ZTogJ3Rlc3QnLCAgICAgICAgbW9kdWxlSWQ6ICcuL3Rlc3QnLCAgICAgICBuYXY6IHRydWUsIHRpdGxlOidUZXN0JyB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgcm91dGU6ICdjb250cmFjdG9yJywgICAgICAgIG1vZHVsZUlkOiAnLi9jb250cmFjdG9yJywgICAgICAgbmF2OiBmYWxzZSwgdGl0bGU6J0NvbnRyYWN0b3InIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyByb3V0ZTogJ3Jlc3VtZScsICAgICAgICBtb2R1bGVJZDogJy4vcmVzdW1lJywgICAgICAgbmF2OiBmYWxzZSwgdGl0bGU6J1Jlc3VtZXMnIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyByb3V0ZTogJ2NoYXQnLCAgICAgICAgbW9kdWxlSWQ6ICcuL2NoYXQnLCAgICAgICBuYXY6IGZhbHNlLCB0aXRsZTonQ2hhdCcgfSxcblx0XHRcdFx0XHRcdFx0XHR7IHJvdXRlOiAnbGVhZHMnLCAgICAgICAgbW9kdWxlSWQ6ICcuL2xlYWRzJywgICAgICAgbmF2OiBmYWxzZSwgdGl0bGU6J0xlYWRzJyB9LFxuXHRcdFx0XHR7IHJvdXRlOiAnam9iJywgICAgICAgIG1vZHVsZUlkOiAnLi9qb2InLCAgICAgICBuYXY6IGZhbHNlLCB0aXRsZTonSm9icycgfSxcblx0XHRcdFx0eyByb3V0ZTogJ2xvZ2luJywgICAgICAgIG1vZHVsZUlkOiAnLi9sb2dpbicsICAgICAgIG5hdjogZmFsc2UsIHRpdGxlOidMb2dpbicgfSxcblx0XHRcdFx0eyByb3V0ZTogJ2xvZ291dCcsICAgICAgICBtb2R1bGVJZDogJy4vbG9nb3V0JywgICAgICAgbmF2OiBmYWxzZSwgdGl0bGU6J0xvZ291dCcgfSxcblx0XHRcdFx0eyByb3V0ZTogJ3Byb2ZpbGUnLCAgICAgICAgbW9kdWxlSWQ6ICcuL3Byb2ZpbGUnLCAgICAgICBuYXY6IGZhbHNlLCB0aXRsZTonUHJvZmlsZScgfSxcblxuXHRcdFx0XHRdKTtcblx0XHRcdH07XG5cblx0XHR0aGlzLnJvdXRlci5jb25maWd1cmUoYXBwUm91dGVyQ29uZmlnKTtcblx0fVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
