System.register([], function (_export) {
  'use strict';

  var configForDevelopment, configForProduction, config;
  return {
    setters: [],
    execute: function () {
      configForDevelopment = {
        loginRedirect: '/',
        providers: {

          identSrv: {
            name: 'identSrv',
            url: '/auth/identSrv',
            authorizationEndpoint: 'http://localhost:22530/connect/authorize',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['profile', 'openid'],

            responseType: 'code',

            scopePrefix: '',
            scopeDelimiter: ' ',
            requiredUrlParams: ['scope', 'nonce'],
            optionalUrlParams: ['display', 'state'],
            display: 'popup',
            type: '2.0',
            clientId: 'jsclient',

            popupOptions: { width: 452, height: 633 }
          },

          google: {
            clientId: '916423564750-90235fitc9pec8p82bva4rg5kf7q0842.apps.googleusercontent.com',
            state: function state() {
              var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
              return encodeURIComponent(val);
            }
          },

          linkedin: {
            clientId: '75zdpro49ht0fs'
          },

          facebook: {
            clientId: '1769690813253041'
          }

        }
      };
      configForProduction = {
        providers: {
          google: {
            clientId: '916423564750-90235fitc9pec8p82bva4rg5kf7q0842.apps.googleusercontent.com'
          },

          linkedin: {
            clientId: '75zdpro49ht0fs'
          },
          facebook: {
            clientId: '1769688629919926'
          }

        }
      };

      if (window.location.hostname === 'localhost') {
        config = configForDevelopment;
      } else {
        config = configForProduction;
      }

      _export('default', config);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQUksb0JBQW9CLEVBNkNwQixtQkFBbUIsRUFlbkIsTUFBTTs7OztBQTVETiwwQkFBb0IsR0FBRztBQUN6QixxQkFBYSxFQUFFLEdBQUc7QUFDbEIsaUJBQVMsRUFBRTs7QUFFVCxrQkFBUSxFQUFHO0FBQ1QsZ0JBQUksRUFBRSxVQUFVO0FBQ2hCLGVBQUcsRUFBRSxnQkFBZ0I7QUFDckIsaUNBQXFCLEVBQUUsMENBQTBDO0FBQ2pFLHVCQUFXLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtBQUM3RixpQkFBSyxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQzs7QUFFNUIsd0JBQVksRUFBRSxNQUFNOztBQUdwQix1QkFBVyxFQUFFLEVBQUU7QUFDZiwwQkFBYyxFQUFFLEdBQUc7QUFDbkIsNkJBQWlCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0FBQ3JDLDZCQUFpQixFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztBQUN2QyxtQkFBTyxFQUFFLE9BQU87QUFDaEIsZ0JBQUksRUFBRSxLQUFLO0FBQ1gsb0JBQVEsRUFBRSxVQUFVOztBQUVwQix3QkFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO1dBQzFDOztBQUVELGdCQUFNLEVBQUU7QUFFTixvQkFBUSxFQUFFLDBFQUEwRTtBQUNwRixpQkFBSyxFQUFFLGlCQUFVO0FBQ2Ysa0JBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBLEdBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBLENBQUUsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyRixxQkFBTyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztXQUNGOztBQUVELGtCQUFRLEVBQUM7QUFDUCxvQkFBUSxFQUFDLGdCQUFnQjtXQUMxQjs7QUFFRCxrQkFBUSxFQUFDO0FBQ1Asb0JBQVEsRUFBQyxrQkFBa0I7V0FDNUI7O1NBRUY7T0FDRjtBQUVHLHlCQUFtQixHQUFHO0FBQ3hCLGlCQUFTLEVBQUU7QUFDVCxnQkFBTSxFQUFFO0FBQ04sb0JBQVEsRUFBRSwwRUFBMEU7V0FDckY7O0FBRUQsa0JBQVEsRUFBQztBQUNQLG9CQUFRLEVBQUMsZ0JBQWdCO1dBQzFCO0FBQ0Qsa0JBQVEsRUFBQztBQUNQLG9CQUFRLEVBQUMsa0JBQWtCO1dBQzVCOztTQUVGO09BQ0Y7O0FBRUQsVUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBRyxXQUFXLEVBQUU7QUFDMUMsY0FBTSxHQUFHLG9CQUFvQixDQUFDO09BQy9CLE1BQ0c7QUFDRixjQUFNLEdBQUcsbUJBQW1CLENBQUM7T0FDOUI7O3lCQUdjLE1BQU0iLCJmaWxlIjoiYXV0aENvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb25maWdGb3JEZXZlbG9wbWVudCA9IHtcbiAgbG9naW5SZWRpcmVjdDogJy8nLFxuICBwcm92aWRlcnM6IHtcblxuICAgIGlkZW50U3J2IDoge1xuICAgICAgbmFtZTogJ2lkZW50U3J2JyxcbiAgICAgIHVybDogJy9hdXRoL2lkZW50U3J2JyxcbiAgICAgIGF1dGhvcml6YXRpb25FbmRwb2ludDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MjI1MzAvY29ubmVjdC9hdXRob3JpemUnLCAvL2lmIHRoaXMgZW5kcyB3aXRoIHNsYXNoIC0tPiBnYW1lIG92ZXJcbiAgICAgIHJlZGlyZWN0VXJpOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luIHx8IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgICAgIHNjb3BlOiBbJ3Byb2ZpbGUnLCAnb3BlbmlkJ10sXG5cbiAgICAgIHJlc3BvbnNlVHlwZSA6J2NvZGUnLFxuXG5cbiAgICAgIHNjb3BlUHJlZml4OiAnJyxcbiAgICAgIHNjb3BlRGVsaW1pdGVyOiAnICcsXG4gICAgICByZXF1aXJlZFVybFBhcmFtczogWydzY29wZScsICdub25jZSddLFxuICAgICAgb3B0aW9uYWxVcmxQYXJhbXM6IFsnZGlzcGxheScsICdzdGF0ZSddLFxuICAgICAgZGlzcGxheTogJ3BvcHVwJyxcbiAgICAgIHR5cGU6ICcyLjAnLFxuICAgICAgY2xpZW50SWQ6ICdqc2NsaWVudCcsXG5cbiAgICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogNDUyLCBoZWlnaHQ6IDYzMyB9XG4gICAgfSxcblxuICAgIGdvb2dsZToge1xuICAgICAgLy9yZXNwb25zZVR5cGUgOidjb2RlJyxcbiAgICAgIGNsaWVudElkOiAnOTE2NDIzNTY0NzUwLTkwMjM1Zml0YzlwZWM4cDgyYnZhNHJnNWtmN3EwODQyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgICAgIHN0YXRlOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdmFsID0gKChEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSkgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgICxcbiAgICBsaW5rZWRpbjp7XG4gICAgICBjbGllbnRJZDonNzV6ZHBybzQ5aHQwZnMnXG4gICAgfVxuICAgICxcbiAgICBmYWNlYm9vazp7XG4gICAgICBjbGllbnRJZDonMTc2OTY5MDgxMzI1MzA0MScsXG4gICAgfVxuICAgICxcbiAgfVxufTtcblxudmFyIGNvbmZpZ0ZvclByb2R1Y3Rpb24gPSB7XG4gIHByb3ZpZGVyczoge1xuICAgIGdvb2dsZToge1xuICAgICAgY2xpZW50SWQ6ICc5MTY0MjM1NjQ3NTAtOTAyMzVmaXRjOXBlYzhwODJidmE0cmc1a2Y3cTA4NDIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXG4gICAgfVxuICAgICxcbiAgICBsaW5rZWRpbjp7XG4gICAgICBjbGllbnRJZDonNzV6ZHBybzQ5aHQwZnMnXG4gICAgfSxcbiAgICBmYWNlYm9vazp7XG4gICAgICBjbGllbnRJZDonMTc2OTY4ODYyOTkxOTkyNidcbiAgICB9XG5cbiAgfVxufTtcbnZhciBjb25maWcgO1xuaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZT09PSdsb2NhbGhvc3QnKSB7XG4gIGNvbmZpZyA9IGNvbmZpZ0ZvckRldmVsb3BtZW50O1xufVxuZWxzZXtcbiAgY29uZmlnID0gY29uZmlnRm9yUHJvZHVjdGlvbjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
