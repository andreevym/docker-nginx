import {inject} from 'aurelia-dependency-injection';
import {AuthService} from 'aurelia-auth';
import {HttpClient} from 'aurelia-fetch-client';
import  io from 'socket.io-client';
//http://www.tamas.io/further-additions-to-the-node-jssocket-io-chat-app/


@inject(AuthService , HttpClient )

export class Chat {

  constructor(auth, HttpClient ){
    this.profile = [];
    this.oneUser = [];
    this.users = [];
    this.auth = auth;
    this.http = HttpClient;
    //localhost issue in production
    this.socket = io.connect('/socket.io/');
    this.socket.on("list", (data) => {
      this.users = data.newList,
      this.oneUser = data.oneUser
    });
    this.socket.on( 'broadcast', function(msg){
      $('#messages').append($(`<div class="msg row"><div class="col-xs-1"><div><img class="img-responsive" src="${msg.profile.picture}" alt=""></div></div><div class="col-xs-11"><div class="clearfix"><h4 class="clearfix"><span class="pull-left"><b><u>${msg.profile.displayName}</u></b><span class="gray-tag"></span></span><span style="font-size:80%"class="gray-tag pull-right">${ msg.date }</span></h4></div><div class="msg-body"><p style="font-size:16px">${msg.msg}</p></div></div></div>`));
      $('.apw').animate({
           scrollTop: $('.apw')[0].scrollHeight
         }, 1000);
    });
  }
  attached(){
    $('form').submit(() =>{
      var lsDate = new Date();
      var currentDate = lsDate.toUTCString().split(",")[1].replace(/\s*(GMT|UTC)$/, "").trim();
      this.socket.emit( 'incoming', {
        msg: $('#m').val(),
        date : currentDate,
        profile: this.profile
      });
      $('#m').val('');
      return false;
  });

  }
  canDeactivate() {
    alert("Are you sure you want leave chat?");
    this.socket.emit("remove", {
      displayName : this.profile.displayName,
      picture : this.profile.picture
    })
  }
  activate(){
    this.auth.getMe()
    .then(data =>{
      this.profile = data;
      this.socket.emit("user", {
        displayName : data.displayName,
        picture : data.picture,
        id: data._id
      })
    });
    this.http.fetch('api/chat')
    .then(response => response.json())
    .then(data => {
      this.messages = data
      for(let n of data){
        console.log(n);
        //created, content, username, picture
        $('#messages').append($(`<div class="msg row"><div class="col-xs-1"><div style="padding: 10px 0 10px 0;" ><img class="img-responsive" src="${n.picture}" alt=""></div></div><div class="col-xs-11"><div class="clearfix"><h4 class="clearfix"><span class="pull-left"><b><u>${n.username}</u></b><span class="gray-tag"></span></span><span style="font-size:80%"class="gray-tag pull-right">${n.created}</span></h4></div><div class="msg-body"><p style="font-size:16px">${n.content}</p></div></div></div>`));
        //$('#messages').append($(`<div class="msg"><div class="gray-tag" align="right">${n.created}</div><div class="msg-img"><img width="25" height="25" class="img-circle" src="${n.picture}" alt=""></div><div class="msg-body"><h4>${n.username}<span class="gray-tag"></span></h4><p>${n.content}</p></div></div>`));
      }
      $('.apw').animate({
           scrollTop: $('.apw')[0].scrollHeight
         }, 1000);
    });
  }
}
