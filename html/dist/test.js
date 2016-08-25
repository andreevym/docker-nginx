System.register([], function (_export) {
  'use strict';

  var Test, UserToIdValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Test = function Test() {
        _classCallCheck(this, Test);

        this.group = {
          users: [{
            id: 543,
            firstName: 'Bob',
            lastName: 'Barker'
          }]
        };
        this.userService = {
          users: [{
            id: 123,
            firstName: 'Matt',
            lastName: 'Davis'
          }, {
            id: 345,
            firstName: 'Donald',
            lastName: 'Trump'
          }, {
            id: 678,
            firstName: 'Hillary',
            lastName: 'Clinton'
          }, {
            id: 543,
            firstName: 'Bob',
            lastName: 'Barker'
          }, {
            id: 910,
            firstName: 'Bernie',
            lastName: 'Sanders'
          }]
        };
      };

      _export('Test', Test);

      UserToIdValueConverter = (function () {
        function UserToIdValueConverter() {
          _classCallCheck(this, UserToIdValueConverter);
        }

        _createClass(UserToIdValueConverter, [{
          key: 'toView',
          value: function toView(user, users) {
            return user ? user.id : null;
          }
        }, {
          key: 'fromView',
          value: function fromView(id, users) {
            return users.find(function (u) {
              return u.id === id;
            });
          }
        }]);

        return UserToIdValueConverter;
      })();

      _export('UserToIdValueConverter', UserToIdValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsSUFBSSxFQWtDSixzQkFBc0I7Ozs7Ozs7OztBQWxDdEIsVUFBSSxZQUFKLElBQUk7OEJBQUosSUFBSTs7YUFDZixLQUFLLEdBQUc7QUFDTixlQUFLLEVBQUUsQ0FBQztBQUNOLGNBQUUsRUFBRSxHQUFHO0FBQ1AscUJBQVMsRUFBRSxLQUFLO0FBQ2hCLG9CQUFRLEVBQUUsUUFBUTtXQUNuQixDQUFDO1NBQ0g7YUFFRCxXQUFXLEdBQUc7QUFDWixlQUFLLEVBQUUsQ0FBQztBQUNOLGNBQUUsRUFBRSxHQUFHO0FBQ1AscUJBQVMsRUFBRSxNQUFNO0FBQ2pCLG9CQUFRLEVBQUUsT0FBTztXQUNsQixFQUFFO0FBQ0QsY0FBRSxFQUFFLEdBQUc7QUFDUCxxQkFBUyxFQUFFLFFBQVE7QUFDbkIsb0JBQVEsRUFBRSxPQUFPO1dBQ2xCLEVBQUU7QUFDRCxjQUFFLEVBQUUsR0FBRztBQUNQLHFCQUFTLEVBQUUsU0FBUztBQUNwQixvQkFBUSxFQUFFLFNBQVM7V0FDcEIsRUFBRTtBQUNELGNBQUUsRUFBRSxHQUFHO0FBQ1AscUJBQVMsRUFBRSxLQUFLO0FBQ2hCLG9CQUFRLEVBQUUsUUFBUTtXQUNuQixFQUFFO0FBQ0QsY0FBRSxFQUFFLEdBQUc7QUFDUCxxQkFBUyxFQUFFLFFBQVE7QUFDbkIsb0JBQVEsRUFBRSxTQUFTO1dBQ3BCLENBQUM7U0FDSDs7Ozs7QUFHVSw0QkFBc0I7aUJBQXRCLHNCQUFzQjtnQ0FBdEIsc0JBQXNCOzs7cUJBQXRCLHNCQUFzQjs7aUJBQzNCLGdCQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDbEIsbUJBQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1dBQzlCOzs7aUJBRU8sa0JBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtBQUNsQixtQkFBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztxQkFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUU7YUFBQSxDQUFDLENBQUM7V0FDckM7OztlQVBVLHNCQUFzQiIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRlc3Qge1xuICBncm91cCA9IHtcbiAgICB1c2VyczogW3tcbiAgICAgIGlkOiA1NDMsXG4gICAgICBmaXJzdE5hbWU6ICdCb2InLFxuICAgICAgbGFzdE5hbWU6ICdCYXJrZXInXG4gICAgfV1cbiAgfTtcblxuICB1c2VyU2VydmljZSA9IHtcbiAgICB1c2VyczogW3tcbiAgICAgIGlkOiAxMjMsXG4gICAgICBmaXJzdE5hbWU6ICdNYXR0JyxcbiAgICAgIGxhc3ROYW1lOiAnRGF2aXMnXG4gICAgfSwge1xuICAgICAgaWQ6IDM0NSxcbiAgICAgIGZpcnN0TmFtZTogJ0RvbmFsZCcsXG4gICAgICBsYXN0TmFtZTogJ1RydW1wJ1xuICAgIH0sIHtcbiAgICAgIGlkOiA2NzgsXG4gICAgICBmaXJzdE5hbWU6ICdIaWxsYXJ5JyxcbiAgICAgIGxhc3ROYW1lOiAnQ2xpbnRvbidcbiAgICB9LCB7XG4gICAgICBpZDogNTQzLFxuICAgICAgZmlyc3ROYW1lOiAnQm9iJyxcbiAgICAgIGxhc3ROYW1lOiAnQmFya2VyJ1xuICAgIH0sIHtcbiAgICAgIGlkOiA5MTAsXG4gICAgICBmaXJzdE5hbWU6ICdCZXJuaWUnLFxuICAgICAgbGFzdE5hbWU6ICdTYW5kZXJzJ1xuICAgIH1dXG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VyVG9JZFZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHVzZXIsIHVzZXJzKSB7XG4gICAgcmV0dXJuIHVzZXIgPyB1c2VyLmlkIDogbnVsbDtcbiAgfVxuXG4gIGZyb21WaWV3KGlkLCB1c2Vycykge1xuICAgIHJldHVybiB1c2Vycy5maW5kKHUgPT4gdS5pZCA9PT0gaWQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
