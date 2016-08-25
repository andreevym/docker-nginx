import {bindable } from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
import {BindingEngine} from 'aurelia-framework';

@inject(AuthService, BindingEngine)
export class NavBar {
    _isAuthenticated = false;
    displayName = "";
    picture = "";
    @bindable router = null;
    subscription = {};
    constructor(auth, bindingEngine) {
        this.auth = auth;
        this.bindingEngine = bindingEngine;
        this._isAuthenticated = this.auth.isAuthenticated();
        this.subscription = bindingEngine.propertyObserver(this, 'isAuthenticated')
            .subscribe((newValue, oldValue) => {
                if (this.isAuthenticated) {
                    this.auth.getMe().then(data => {
                        return this.displayName = data.displayName;
                    });
                }
            });
    }

    get isAuthenticated() {
        return this.auth.isAuthenticated();
    }

    deactivate() {
        this.subscription.dispose();
    }
    login(){
  		var creds = "grant_type=password&email=" + this.email + "&password=" + this.password;
  		return this.auth.login(this.email, this.password)
  		//return this.auth.login(creds)
  		.then(response=>{
  			console.log("success logged " + response);
  		})
  		.catch(err=>{
  			err.json().then(function(e){
  				console.log("login failure : " + e.message);
  			});

  		});
  	}

    authenticate(name){
  		return this.auth.authenticate(name, false, null)
  		.then((response)=>{
        //setToken(response.token);
        //responds with the user token
        console.log(response);
  		});
  	}

    signup(){
      return this.auth.signup(this.displayName, this.email, this.password)
      .then((response)=>{
      });
    }

    attached(){
      this.auth.getMe()
  		.then(data=>{
        this.displayName = data.displayName;
        this.picture = data.picture;
  		});
      $(".email-signup").hide();
      $("#signup-box-link").click(function(){
        $(".email-login").fadeOut(10);
        $(".email-signup").delay(10).fadeIn(10);
        $("#login-box-link").removeClass("active");
        $("#signup-box-link").addClass("active");
      });
      $("#login-box-link").click(function(){
        $(".email-login").delay(10).fadeIn(10);;
        $(".email-signup").fadeOut(10);
        $("#login-box-link").addClass("active");
        $("#signup-box-link").removeClass("active");
      });
      $("#login-menu").on("click", function(){
         $(".login-box").toggle();
       });
     }

   }
