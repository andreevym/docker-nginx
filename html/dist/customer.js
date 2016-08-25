System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export) {
  'use strict';

  var inject, HttpClient, Customer;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }],
    execute: function () {
      Customer = (function () {
        function Customer(http) {
          _classCallCheck(this, _Customer);

          this.heading = 'Customer management';
          this.customers = [];
          this.url = 'http://jsonplaceholder.typicode.com/posts';

          this.http = http;
        }

        _createClass(Customer, [{
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

        var _Customer = Customer;
        Customer = inject(HttpClient)(Customer) || Customer;
        return Customer;
      })();

      _export('Customer', Customer);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFHYSxRQUFROzs7Ozs7OztpQ0FIYixNQUFNOzt1Q0FDTixVQUFVOzs7QUFFTCxjQUFRO0FBTVIsaUJBTkEsUUFBUSxDQU1QLElBQUksRUFBQzs7O2VBTGpCLE9BQU8sR0FBRyxxQkFBcUI7ZUFDL0IsU0FBUyxHQUFHLEVBQUU7ZUFFZCxHQUFHLEdBQUcsMkNBQTJDOztBQUcvQyxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7cUJBUlUsUUFBUTs7aUJBVVgsb0JBQUU7OztBQUVULG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDL0IsSUFBSSxDQUFDLFVBQUEsUUFBUTtxQkFBSyxRQUFRLENBQUMsSUFBSSxFQUFFO2FBQUEsQ0FBQyxDQUNsQyxJQUFJLENBQUMsVUFBQSxDQUFDO3FCQUFJLE1BQUssU0FBUyxHQUFHLENBQUM7YUFBQSxDQUFDLENBQUM7V0FFaEM7Ozt3QkFoQlcsUUFBUTtBQUFSLGdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVEiLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXIge1xuICBoZWFkaW5nID0gJ0N1c3RvbWVyIG1hbmFnZW1lbnQnO1xuICBjdXN0b21lcnMgPSBbXTtcblxuICB1cmwgPSAnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnO1xuXG4gIGNvbnN0cnVjdG9yKGh0dHApe1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH1cblxuICBhY3RpdmF0ZSgpe1xuXG4gICByZXR1cm4gdGhpcy5odHRwLmZldGNoKHRoaXMudXJsKVxuICAgLnRoZW4ocmVzcG9uc2UgPT4gIHJlc3BvbnNlLmpzb24oKSlcbiAgIC50aGVuKGMgPT4gdGhpcy5jdXN0b21lcnMgPSBjKTtcblxuIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
