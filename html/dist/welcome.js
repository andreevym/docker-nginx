System.register([], function (_export) {
  "use strict";

  var Customer;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Customer = (function () {
        function Customer() {
          _classCallCheck(this, Customer);

          this.heading = "Home page";
          this.url = 'api/contractor';
        }

        _createClass(Customer, [{
          key: "activate",
          value: function activate() {}
        }, {
          key: "attached",
          value: function attached() {
            $("#signUp").on("click", function () {
              $(".login-box").toggle();
            });
          }
        }]);

        return Customer;
      })();

      _export("Customer", Customer);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsUUFBUTs7Ozs7Ozs7O0FBQVIsY0FBUTtBQU1SLGlCQU5BLFFBQVEsR0FNTjtnQ0FORixRQUFROztlQUVuQixPQUFPLEdBQUcsV0FBVztlQUVyQixHQUFHLEdBQUcsZ0JBQWdCO1NBRUw7O3FCQU5OLFFBQVE7O2lCQVFWLG9CQUFFLEVBQ1Y7OztpQkFDTyxvQkFBRTtBQUNSLGFBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVU7QUFDaEMsZUFBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzFCLENBQUMsQ0FBQztXQUNMOzs7ZUFkVSxRQUFRIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3VzdG9tZXJ7XG5cbiAgaGVhZGluZyA9IFwiSG9tZSBwYWdlXCI7XG5cbiAgdXJsID0gJ2FwaS9jb250cmFjdG9yJztcblxuICBjb25zdHJ1Y3RvcigpeyAgfVxuXG4gIGFjdGl2YXRlICgpe1xuICB9XG4gIGF0dGFjaGVkKCl7XG4gICAgJChcIiNzaWduVXBcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICQoXCIubG9naW4tYm94XCIpLnRvZ2dsZSgpO1xuICAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
