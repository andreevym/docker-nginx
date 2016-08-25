System.register(['aurelia-framework', 'aurelia-auth', './customHttpClient', 'aurelia-fetch-client', 'jquery', 'datatables'], function (_export) {
  'use strict';

  var inject, AuthService, CustomHttpClient, json, $, dataTable, Datatable;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaAuth) {
      AuthService = _aureliaAuth.AuthService;
    }, function (_customHttpClient) {
      CustomHttpClient = _customHttpClient.CustomHttpClient;
    }, function (_aureliaFetchClient) {
      json = _aureliaFetchClient.json;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_datatables) {
      dataTable = _datatables;
    }],
    execute: function () {
      Datatable = (function () {
        _createClass(Datatable, [{
          key: 'edit',
          value: function edit(selectedProduct) {
            this.editing = selectedProduct;
          }
        }]);

        function Datatable(auth, http) {
          _classCallCheck(this, _Datatable);

          this.products = [];
          this.user = null;
          this.selectedProducts = [];
          this.editing = null;
          this.heading = 'Resumes';
          this.url = 'api/indeed';

          this.http = http;
          this.auth = auth;
        }

        _createClass(Datatable, [{
          key: 'addList',
          value: function addList() {
            console.log(this.selectedProducts);
            this.http.fetch('api/users', {
              method: 'post',
              body: json({
                user: this.user,
                data: this.selectedProducts })
            }).then(function (response) {
              return response.json();
            }).then(function (savedComment) {
              console.log('Saved comment! ID: ' + savedComment.name);
              alert('Resumes and edited info saved!');
            })['catch'](function (error) {
              alert('Error saving comment!' + error);
            });
          }
        }, {
          key: 'activate',
          value: function activate() {
            var _this = this;

            this.auth.getMe().then(function (info) {
              return _this.user = info;
            });
            this.http.fetch(this.url).then(function (response) {
              return response.json();
            }).then(function (c) {
              _this.products = c;
            });
            this.http.fetch('api/users').then(function (response) {
              return response.json();
            }).then(function (data) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var n = _step.value;

                  _this.selectedProducts = JSON.parse(JSON.stringify(n.resumeList));
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            });
          }
        }, {
          key: 'attached',
          value: function attached() {
            setTimeout(function () {
              console.log("alert");
              $('#example').dataTable({
                "paginate": true,
                "pageLength": 25,
                "jQueryUI": true
              });
            }, 1000);
          }
        }]);

        var _Datatable = Datatable;
        Datatable = inject(AuthService, CustomHttpClient, json)(Datatable) || Datatable;
        return Datatable;
      })();

      _export('Datatable', Datatable);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUUsRUFBRTtBQUNoQiwwQkFBVSxFQUFFLElBQUk7ZUFDZixDQUFDLENBQUE7YUFDTCxFQUFDLElBQUksQ0FBQyxDQUFDO1dBQ1Q7Ozt5QkE3RFEsU0FBUztBQUFULGlCQUFTLEdBRnJCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBRS9CLFNBQVMsS0FBVCxTQUFTO2VBQVQsU0FBUyIsImZpbGUiOiJyZXN1bWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnYXVyZWxpYS1hdXRoJztcbmltcG9ydCB7Q3VzdG9tSHR0cENsaWVudH0gZnJvbSAnLi9jdXN0b21IdHRwQ2xpZW50JztcbmltcG9ydCB7anNvbn0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIGRhdGFUYWJsZSBmcm9tICdkYXRhdGFibGVzJztcblxuQGluamVjdChBdXRoU2VydmljZSAsQ3VzdG9tSHR0cENsaWVudCwganNvbilcblxuZXhwb3J0IGNsYXNzIERhdGF0YWJsZSB7XG4gIHByb2R1Y3RzID0gW107XG4gIHVzZXIgPSBudWxsO1xuICBzZWxlY3RlZFByb2R1Y3RzID0gW107XG4gIGVkaXRpbmcgPSBudWxsO1xuICBlZGl0KHNlbGVjdGVkUHJvZHVjdCl7XG4gICAgIHRoaXMuZWRpdGluZyA9IHNlbGVjdGVkUHJvZHVjdDtcbiAgfVxuXG4gIGhlYWRpbmcgPSAnUmVzdW1lcyc7XG4gIHVybCA9ICdhcGkvaW5kZWVkJztcblxuICBjb25zdHJ1Y3RvcihhdXRoLCBodHRwKXtcbiAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gIH1cblxuICBhZGRMaXN0KCl7XG4gICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFByb2R1Y3RzKTtcbiAgICAgIHRoaXMuaHR0cC5mZXRjaCgnYXBpL3VzZXJzJywge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgYm9keToganNvbih7XG4gICAgICAgICAgdXNlciA6IHRoaXMudXNlcixcbiAgICAgICAgICBkYXRhIDogdGhpcy5zZWxlY3RlZFByb2R1Y3RzfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihzYXZlZENvbW1lbnQgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBTYXZlZCBjb21tZW50ISBJRDogJHtzYXZlZENvbW1lbnQubmFtZX1gKTtcbiAgICAgICAgICBhbGVydCgnUmVzdW1lcyBhbmQgZWRpdGVkIGluZm8gc2F2ZWQhJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBhbGVydCgnRXJyb3Igc2F2aW5nIGNvbW1lbnQhJyArIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKXtcbiAgICAgIHRoaXMuYXV0aC5nZXRNZSgpXG4gICAgICAudGhlbihpbmZvID0+IHRoaXMudXNlciA9IGluZm8pO1xuICAgICAgdGhpcy5odHRwLmZldGNoKHRoaXMudXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gIHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGMgPT4ge1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gY1xuICAgICAgfSk7XG4gICAgICB0aGlzLmh0dHAuZmV0Y2goJ2FwaS91c2VycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBmb3IobGV0IG4gb2YgZGF0YSl7XG4gICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3RzID0gKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobi5yZXN1bWVMaXN0KSkpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsZXJ0XCIpO1xuICAgICAgICAkKCcjZXhhbXBsZScpLmRhdGFUYWJsZSh7XG4gICAgICAgICAgXCJwYWdpbmF0ZVwiOiB0cnVlLFxuICAgICAgICAgIFwicGFnZUxlbmd0aFwiOiAyNSxcbiAgICAgICAgICBcImpRdWVyeVVJXCI6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgIH0sMTAwMCk7XG4gICAgfVxuICB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
