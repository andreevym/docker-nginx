System.register(['aurelia-framework', './customHttpClient'], function (_export) {
  'use strict';

  var inject, useView, CustomHttpClient, Customer2;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }, function (_customHttpClient) {
      CustomHttpClient = _customHttpClient.CustomHttpClient;
    }],
    execute: function () {
      Customer2 = (function () {
        function Customer2(http) {
          _classCallCheck(this, _Customer2);

          this.heading = 'Customer management with custom http service';
          this.customers = [];
          this.url = 'api/customer';

          this.http = http;
        }

        _createClass(Customer2, [{
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

        var _Customer2 = Customer2;
        Customer2 = useView('./customer.html')(Customer2) || Customer2;
        Customer2 = inject(CustomHttpClient)(Customer2) || Customer2;
        return Customer2;
      })();

      _export('Customer2', Customer2);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUNBSWEsU0FBUzs7Ozs7Ozs7aUNBSmQsTUFBTTtrQ0FBRSxPQUFPOzsyQ0FDZixnQkFBZ0I7OztBQUdYLGVBQVM7QUFNVCxpQkFOQSxTQUFTLENBTVIsSUFBSSxFQUFDOzs7ZUFMakIsT0FBTyxHQUFHLDhDQUE4QztlQUN4RCxTQUFTLEdBQUcsRUFBRTtlQUVkLEdBQUcsR0FBRyxjQUFjOztBQUdsQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7cUJBUlUsU0FBUzs7aUJBVVosb0JBQUU7OztBQUVULG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDL0IsSUFBSSxDQUFDLFVBQUEsUUFBUTtxQkFBSyxRQUFRLENBQUMsSUFBSSxFQUFFO2FBQUEsQ0FBQyxDQUNsQyxJQUFJLENBQUMsVUFBQSxDQUFDO3FCQUFJLE1BQUssU0FBUyxHQUFHLENBQUM7YUFBQSxDQUFDLENBQUM7V0FDakM7Ozt5QkFmWSxTQUFTO0FBQVQsaUJBQVMsR0FEckIsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQ2QsU0FBUyxLQUFULFNBQVM7QUFBVCxpQkFBUyxHQUZyQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FFWixTQUFTLEtBQVQsU0FBUztlQUFULFNBQVMiLCJmaWxlIjoiY3VzdG9tZXIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIHVzZVZpZXd9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Q3VzdG9tSHR0cENsaWVudH0gZnJvbSAnLi9jdXN0b21IdHRwQ2xpZW50JztcbkBpbmplY3QoQ3VzdG9tSHR0cENsaWVudClcbkB1c2VWaWV3KCcuL2N1c3RvbWVyLmh0bWwnKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyMntcbiAgaGVhZGluZyA9ICdDdXN0b21lciBtYW5hZ2VtZW50IHdpdGggY3VzdG9tIGh0dHAgc2VydmljZSc7XG4gIGN1c3RvbWVycyA9IFtdO1xuXG4gIHVybCA9ICdhcGkvY3VzdG9tZXInO1xuXG4gIGNvbnN0cnVjdG9yKGh0dHApe1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH1cblxuICBhY3RpdmF0ZSgpe1xuXG4gICByZXR1cm4gdGhpcy5odHRwLmZldGNoKHRoaXMudXJsKVxuICAgLnRoZW4ocmVzcG9uc2UgPT4gIHJlc3BvbnNlLmpzb24oKSlcbiAgIC50aGVuKGMgPT4gdGhpcy5jdXN0b21lcnMgPSBjKTtcbn1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
