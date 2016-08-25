System.register(['aurelia-dependency-injection', 'aurelia-auth', 'aurelia-fetch-client', 'socket.io-client'], function (_export) {
  'use strict';

  var inject, AuthService, HttpClient, io, Chat;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaAuth) {
      AuthService = _aureliaAuth.AuthService;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_socketIoClient) {
      io = _socketIoClient['default'];
    }],
    execute: function () {
      Chat = (function () {
        function Chat(auth, HttpClient) {
          var _this = this;

          _classCallCheck(this, _Chat);

          this.profile = [];
          this.oneUser = [];
          this.users = [];
          this.auth = auth;
          this.http = HttpClient;

          this.socket = io.connect('http://localhost:5555');
          this.socket.on("list", function (data) {
            _this.users = data.newList, _this.oneUser = data.oneUser;
          });
          this.socket.on('broadcast', function (msg) {
            $('#messages').append($('<div class="msg row"><div class="col-xs-1"><div><img class="img-responsive" src="' + msg.profile.picture + '" alt=""></div></div><div class="col-xs-11"><div class="clearfix"><h4 class="clearfix"><span class="pull-left"><b><u>' + msg.profile.displayName + '</u></b><span class="gray-tag"></span></span><span style="font-size:80%"class="gray-tag pull-right">' + msg.date + '</span></h4></div><div class="msg-body"><p style="font-size:16px">' + msg.msg + '</p></div></div></div>'));
            $('.apw').animate({
              scrollTop: $('.apw')[0].scrollHeight
            }, 1000);
          });
        }

        _createClass(Chat, [{
          key: 'attached',
          value: function attached() {
            var _this2 = this;

            $('form').submit(function () {
              var lsDate = new Date();
              var currentDate = lsDate.toUTCString().split(",")[1].replace(/\s*(GMT|UTC)$/, "").trim();
              _this2.socket.emit('incoming', {
                msg: $('#m').val(),
                date: currentDate,
                profile: _this2.profile
              });
              $('#m').val('');
              return false;
            });
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            alert("Are you sure you want leave chat?");
            this.socket.emit("remove", {
              displayName: this.profile.displayName,
              picture: this.profile.picture
            });
          }
        }, {
          key: 'activate',
          value: function activate() {
            var _this3 = this;

            this.auth.getMe().then(function (data) {
              _this3.profile = data;
              _this3.socket.emit("user", {
                displayName: data.displayName,
                picture: data.picture,
                id: data._id
              });
            });
            this.http.fetch('api/chat').then(function (response) {
              return response.json();
            }).then(function (data) {
              _this3.messages = data;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var n = _step.value;

                  console.log(n);

                  $('#messages').append($('<div class="msg row"><div class="col-xs-1"><div style="padding: 10px 0 10px 0;" ><img class="img-responsive" src="' + n.picture + '" alt=""></div></div><div class="col-xs-11"><div class="clearfix"><h4 class="clearfix"><span class="pull-left"><b><u>' + n.username + '</u></b><span class="gray-tag"></span></span><span style="font-size:80%"class="gray-tag pull-right">' + n.created + '</span></h4></div><div class="msg-body"><p style="font-size:16px">' + n.content + '</p></div></div></div>'));
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

              $('.apw').animate({
                scrollTop: $('.apw')[0].scrollHeight
              }, 1000);
            });
          }
        }]);

        var _Chat = Chat;
        Chat = inject(AuthService, HttpClient)(Chat) || Chat;
        return Chat;
      })();

      _export('Chat', Chat);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LENBQUMsTUFBTSxFQUFFO0FBQ3ZCLDJCQUFXLEVBQUcsSUFBSSxDQUFDLFdBQVc7QUFDOUIsdUJBQU8sRUFBRyxJQUFJLENBQUMsT0FBTztBQUN0QixrQkFBRSxFQUFFLElBQUksQ0FBQyxHQUFHO2VBQ2IsQ0FBQyxDQUFBO2FBQ0gsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUMxQixJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7YUFBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNaLHFCQUFLLFFBQVEsR0FBRyxJQUFJLENBQUE7Ozs7OztBQUNwQixxQ0FBYSxJQUFJLDhIQUFDO3NCQUFWLENBQUM7O0FBQ1AseUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWYsbUJBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyx3SEFBc0gsQ0FBQyxDQUFDLE9BQU8sNkhBQXdILENBQUMsQ0FBQyxRQUFRLDRHQUF1RyxDQUFDLENBQUMsT0FBTywwRUFBcUUsQ0FBQyxDQUFDLE9BQU8sNEJBQXlCLENBQUMsQ0FBQztpQkFFbGY7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxlQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2IseUJBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtlQUNyQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1dBQ0o7OztvQkFsRVUsSUFBSTtBQUFKLFlBQUksR0FGaEIsTUFBTSxDQUFDLFdBQVcsRUFBRyxVQUFVLENBQUUsQ0FFckIsSUFBSSxLQUFKLElBQUk7ZUFBSixJQUFJIiwiZmlsZSI6ImNoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICdhdXJlbGlhLWF1dGgnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQgIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuLy9odHRwOi8vd3d3LnRhbWFzLmlvL2Z1cnRoZXItYWRkaXRpb25zLXRvLXRoZS1ub2RlLWpzc29ja2V0LWlvLWNoYXQtYXBwL1xuXG5cbkBpbmplY3QoQXV0aFNlcnZpY2UgLCBIdHRwQ2xpZW50IClcblxuZXhwb3J0IGNsYXNzIENoYXQge1xuXG4gIGNvbnN0cnVjdG9yKGF1dGgsIEh0dHBDbGllbnQgKXtcbiAgICB0aGlzLnByb2ZpbGUgPSBbXTtcbiAgICB0aGlzLm9uZVVzZXIgPSBbXTtcbiAgICB0aGlzLnVzZXJzID0gW107XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICB0aGlzLmh0dHAgPSBIdHRwQ2xpZW50O1xuICAgIC8vbG9jYWxob3N0IGlzc3VlIGluIHByb2R1Y3Rpb25cbiAgICB0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTU1NScpO1xuICAgIHRoaXMuc29ja2V0Lm9uKFwibGlzdFwiLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy51c2VycyA9IGRhdGEubmV3TGlzdCxcbiAgICAgIHRoaXMub25lVXNlciA9IGRhdGEub25lVXNlclxuICAgIH0pO1xuICAgIHRoaXMuc29ja2V0Lm9uKCAnYnJvYWRjYXN0JywgZnVuY3Rpb24obXNnKXtcbiAgICAgICQoJyNtZXNzYWdlcycpLmFwcGVuZCgkKGA8ZGl2IGNsYXNzPVwibXNnIHJvd1wiPjxkaXYgY2xhc3M9XCJjb2wteHMtMVwiPjxkaXY+PGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwiJHttc2cucHJvZmlsZS5waWN0dXJlfVwiIGFsdD1cIlwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wteHMtMTFcIj48ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48aDQgY2xhc3M9XCJjbGVhcmZpeFwiPjxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+PGI+PHU+JHttc2cucHJvZmlsZS5kaXNwbGF5TmFtZX08L3U+PC9iPjxzcGFuIGNsYXNzPVwiZ3JheS10YWdcIj48L3NwYW4+PC9zcGFuPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjgwJVwiY2xhc3M9XCJncmF5LXRhZyBwdWxsLXJpZ2h0XCI+JHsgbXNnLmRhdGUgfTwvc3Bhbj48L2g0PjwvZGl2PjxkaXYgY2xhc3M9XCJtc2ctYm9keVwiPjxwIHN0eWxlPVwiZm9udC1zaXplOjE2cHhcIj4ke21zZy5tc2d9PC9wPjwvZGl2PjwvZGl2PjwvZGl2PmApKTtcbiAgICAgICQoJy5hcHcnKS5hbmltYXRlKHtcbiAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCcuYXB3JylbMF0uc2Nyb2xsSGVpZ2h0XG4gICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbiAgfVxuICBhdHRhY2hlZCgpe1xuICAgICQoJ2Zvcm0nKS5zdWJtaXQoKCkgPT57XG4gICAgICB2YXIgbHNEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIHZhciBjdXJyZW50RGF0ZSA9IGxzRGF0ZS50b1VUQ1N0cmluZygpLnNwbGl0KFwiLFwiKVsxXS5yZXBsYWNlKC9cXHMqKEdNVHxVVEMpJC8sIFwiXCIpLnRyaW0oKTtcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoICdpbmNvbWluZycsIHtcbiAgICAgICAgbXNnOiAkKCcjbScpLnZhbCgpLFxuICAgICAgICBkYXRlIDogY3VycmVudERhdGUsXG4gICAgICAgIHByb2ZpbGU6IHRoaXMucHJvZmlsZVxuICAgICAgfSk7XG4gICAgICAkKCcjbScpLnZhbCgnJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIH1cbiAgY2FuRGVhY3RpdmF0ZSgpIHtcbiAgICBhbGVydChcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCBsZWF2ZSBjaGF0P1wiKTtcbiAgICB0aGlzLnNvY2tldC5lbWl0KFwicmVtb3ZlXCIsIHtcbiAgICAgIGRpc3BsYXlOYW1lIDogdGhpcy5wcm9maWxlLmRpc3BsYXlOYW1lLFxuICAgICAgcGljdHVyZSA6IHRoaXMucHJvZmlsZS5waWN0dXJlXG4gICAgfSlcbiAgfVxuICBhY3RpdmF0ZSgpe1xuICAgIHRoaXMuYXV0aC5nZXRNZSgpXG4gICAgLnRoZW4oZGF0YSA9PntcbiAgICAgIHRoaXMucHJvZmlsZSA9IGRhdGE7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KFwidXNlclwiLCB7XG4gICAgICAgIGRpc3BsYXlOYW1lIDogZGF0YS5kaXNwbGF5TmFtZSxcbiAgICAgICAgcGljdHVyZSA6IGRhdGEucGljdHVyZSxcbiAgICAgICAgaWQ6IGRhdGEuX2lkXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMuaHR0cC5mZXRjaCgnYXBpL2NoYXQnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZXMgPSBkYXRhXG4gICAgICBmb3IobGV0IG4gb2YgZGF0YSl7XG4gICAgICAgIGNvbnNvbGUubG9nKG4pO1xuICAgICAgICAvL2NyZWF0ZWQsIGNvbnRlbnQsIHVzZXJuYW1lLCBwaWN0dXJlXG4gICAgICAgICQoJyNtZXNzYWdlcycpLmFwcGVuZCgkKGA8ZGl2IGNsYXNzPVwibXNnIHJvd1wiPjxkaXYgY2xhc3M9XCJjb2wteHMtMVwiPjxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1wiID48aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCIke24ucGljdHVyZX1cIiBhbHQ9XCJcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY29sLXhzLTExXCI+PGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PGg0IGNsYXNzPVwiY2xlYXJmaXhcIj48c3BhbiBjbGFzcz1cInB1bGwtbGVmdFwiPjxiPjx1PiR7bi51c2VybmFtZX08L3U+PC9iPjxzcGFuIGNsYXNzPVwiZ3JheS10YWdcIj48L3NwYW4+PC9zcGFuPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjgwJVwiY2xhc3M9XCJncmF5LXRhZyBwdWxsLXJpZ2h0XCI+JHtuLmNyZWF0ZWR9PC9zcGFuPjwvaDQ+PC9kaXY+PGRpdiBjbGFzcz1cIm1zZy1ib2R5XCI+PHAgc3R5bGU9XCJmb250LXNpemU6MTZweFwiPiR7bi5jb250ZW50fTwvcD48L2Rpdj48L2Rpdj48L2Rpdj5gKSk7XG4gICAgICAgIC8vJCgnI21lc3NhZ2VzJykuYXBwZW5kKCQoYDxkaXYgY2xhc3M9XCJtc2dcIj48ZGl2IGNsYXNzPVwiZ3JheS10YWdcIiBhbGlnbj1cInJpZ2h0XCI+JHtuLmNyZWF0ZWR9PC9kaXY+PGRpdiBjbGFzcz1cIm1zZy1pbWdcIj48aW1nIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIGNsYXNzPVwiaW1nLWNpcmNsZVwiIHNyYz1cIiR7bi5waWN0dXJlfVwiIGFsdD1cIlwiPjwvZGl2PjxkaXYgY2xhc3M9XCJtc2ctYm9keVwiPjxoND4ke24udXNlcm5hbWV9PHNwYW4gY2xhc3M9XCJncmF5LXRhZ1wiPjwvc3Bhbj48L2g0PjxwPiR7bi5jb250ZW50fTwvcD48L2Rpdj48L2Rpdj5gKSk7XG4gICAgICB9XG4gICAgICAkKCcuYXB3JykuYW5pbWF0ZSh7XG4gICAgICAgICAgIHNjcm9sbFRvcDogJCgnLmFwdycpWzBdLnNjcm9sbEhlaWdodFxuICAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
