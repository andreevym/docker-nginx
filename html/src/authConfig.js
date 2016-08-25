var configForDevelopment = {
  loginRedirect: '/',
  providers: {

    identSrv : {
      name: 'identSrv',
      url: '/auth/identSrv',
      authorizationEndpoint: 'http://localhost:22530/connect/authorize', //if this ends with slash --> game over
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      scope: ['profile', 'openid'],

      responseType :'code',


      scopePrefix: '',
      scopeDelimiter: ' ',
      requiredUrlParams: ['scope', 'nonce'],
      optionalUrlParams: ['display', 'state'],
      display: 'popup',
      type: '2.0',
      clientId: 'jsclient',

      popupOptions: { width: 452, height: 633 }
    },

    google: {
      //responseType :'code',
      clientId: '916423564750-90235fitc9pec8p82bva4rg5kf7q0842.apps.googleusercontent.com',
      state: function(){
        var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
        return encodeURIComponent(val);
      }
    }
    ,
    linkedin:{
      clientId:'75zdpro49ht0fs'
    }
    ,
    facebook:{
      clientId:'1769690813253041',
    }
    ,
  }
};

var configForProduction = {
  providers: {
    google: {
      clientId: '916423564750-90235fitc9pec8p82bva4rg5kf7q0842.apps.googleusercontent.com'
    }
    ,
    linkedin:{
      clientId:'75zdpro49ht0fs'
    },
    facebook:{
      clientId:'1769688629919926'
    }

  }
};
var config ;
if (window.location.hostname==='localhost') {
  config = configForDevelopment;
}
else{
  config = configForProduction;
}


export default config;
