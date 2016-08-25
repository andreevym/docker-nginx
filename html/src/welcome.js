export class Customer{

  heading = "Home page";

  url = 'api/contractor';

  constructor(){  }

  activate (){
  }
  attached(){
    $("#signUp").on("click", function(){
       $(".login-box").toggle();
     });
  }
}
