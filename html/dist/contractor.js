System.register(['aurelia-framework', 'aurelia-event-aggregator', 'aurelia-fetch-client', 'jquery', 'datatables'], function (_export) {
  'use strict';

  var inject, customElement, bindable, EventAggregator, HttpClient, $, dataTable, Map;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_datatables) {
      dataTable = _datatables;
    }],
    execute: function () {
      Map = (function () {
        function Map(element, http) {
          _classCallCheck(this, _Map);

          this.element = element;
          this.http = http;
          this.customers = [];
        }

        _createClass(Map, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            this.http.fetch('api/contractor').then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log(data);
              _this.customers = data;
            });
          }
        }, {
          key: 'attached',
          value: function attached() {
            setTimeout(function () {
              $('#js-table').dataTable({
                "paginate": true,
                "pageLength": 25,
                "jQueryUI": true
              });
            }, 2500);
          }
        }]);

        var _Map = Map;
        Map = inject(Element, HttpClient)(Map) || Map;
        return Map;
      })();

      _export('Map', Map);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tGQVFhLEdBQUc7Ozs7Ozs7O2lDQVJSLE1BQU07d0NBQUUsYUFBYTttQ0FBRSxRQUFROztnREFDOUIsZUFBZTs7dUNBQ2hCLFVBQVU7Ozs7Ozs7QUFNTCxTQUFHO0FBQ0gsaUJBREEsR0FBRyxDQUNGLE9BQU8sRUFBRSxJQUFJLEVBQUU7OztBQUN6QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUNyQjs7cUJBTFUsR0FBRzs7aUJBT04sb0JBQUU7OztBQUNSLGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNoQyxJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7YUFBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNaLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xCLG9CQUFLLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDdkIsQ0FBQyxDQUFDO1dBQ0o7OztpQkFFTyxvQkFBRTtBQUNSLHNCQUFVLENBQUMsWUFBVTtBQUNuQixlQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ3ZCLDBCQUFVLEVBQUUsSUFBSTtBQUNoQiw0QkFBWSxFQUFFLEVBQUU7QUFDaEIsMEJBQVUsRUFBRSxJQUFJO2VBQ2pCLENBQUMsQ0FBQTthQUNILEVBQUMsSUFBSSxDQUFDLENBQUM7V0FFVDs7O21CQXpCVSxHQUFHO0FBQUgsV0FBRyxHQUZmLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBRWYsR0FBRyxLQUFILEdBQUc7ZUFBSCxHQUFHIiwiZmlsZSI6ImNvbnRyYWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBkYXRhVGFibGUgZnJvbSAnZGF0YXRhYmxlcyc7XG5cbkBpbmplY3QoRWxlbWVudCwgSHR0cENsaWVudClcblxuZXhwb3J0IGNsYXNzIE1hcCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGh0dHApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgdGhpcy5jdXN0b21lcnMgPSBbXTtcbiAgfVxuXG4gIGFjdGl2YXRlKCl7XG4gICAgdGhpcy5odHRwLmZldGNoKCdhcGkvY29udHJhY3RvcicpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB0aGlzLmN1c3RvbWVycyA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBhdHRhY2hlZCgpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICQoJyNqcy10YWJsZScpLmRhdGFUYWJsZSh7XG4gICAgICAgIFwicGFnaW5hdGVcIjogdHJ1ZSxcbiAgICAgICAgXCJwYWdlTGVuZ3RoXCI6IDI1LFxuICAgICAgICBcImpRdWVyeVVJXCI6IHRydWUsXG4gICAgICB9KVxuICAgIH0sMjUwMCk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
