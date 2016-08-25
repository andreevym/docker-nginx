System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export) {
  'use strict';

  var inject, HttpClient, Map;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }],
    execute: function () {
      Map = (function () {
        function Map(http) {
          _classCallCheck(this, _Map);

          this.heading = 'Map';
          this.customers = [];
          this.url = 'api/map';

          this.http = http;
        }

        _createClass(Map, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.http.fetch(this.url).then(function (response) {
              return response.json();
            }).then(function (c) {
              return _this.customers = c;
            });
          }
        }]);

        var _Map = Map;
        Map = inject(HttpClient)(Map) || Map;
        return Map;
      })();

      _export('Map', Map);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MEJBR2EsR0FBRzs7Ozs7Ozs7aUNBSFIsTUFBTTs7dUNBQ04sVUFBVTs7O0FBRUwsU0FBRztBQU1ILGlCQU5BLEdBQUcsQ0FNRixJQUFJLEVBQUM7OztlQUxqQixPQUFPLEdBQUcsS0FBSztlQUNmLFNBQVMsR0FBRyxFQUFFO2VBRWQsR0FBRyxHQUFHLFNBQVM7O0FBR2IsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQVJVLEdBQUc7O2lCQVVOLG9CQUFFOzs7QUFFVCxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQy9CLElBQUksQ0FBQyxVQUFBLFFBQVE7cUJBQUssUUFBUSxDQUFDLElBQUksRUFBRTthQUFBLENBQUMsQ0FDbEMsSUFBSSxDQUFDLFVBQUEsQ0FBQztxQkFBSSxNQUFLLFNBQVMsR0FBRyxDQUFDO2FBQUEsQ0FBQyxDQUFDO1dBRWhDOzs7bUJBaEJXLEdBQUc7QUFBSCxXQUFHLEdBRGYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLEdBQUcsS0FBSCxHQUFHO2VBQUgsR0FBRyIsImZpbGUiOiJtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgTWFwIHtcbiAgaGVhZGluZyA9ICdNYXAnO1xuICBjdXN0b21lcnMgPSBbXTtcblxuICB1cmwgPSAnYXBpL21hcCc7XG5cbiAgY29uc3RydWN0b3IoaHR0cCl7XG4gICAgdGhpcy5odHRwID0gaHR0cDtcbiAgfVxuXG4gIGFjdGl2YXRlKCl7XG5cbiAgIHJldHVybiB0aGlzLmh0dHAuZmV0Y2godGhpcy51cmwpXG4gICAudGhlbihyZXNwb25zZSA9PiAgcmVzcG9uc2UuanNvbigpKVxuICAgLnRoZW4oYyA9PiB0aGlzLmN1c3RvbWVycyA9IGMpO1xuXG4gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
