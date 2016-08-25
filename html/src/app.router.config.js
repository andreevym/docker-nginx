import {AuthorizeStep} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export default class{

	constructor(router){
		this.router = router;
	}
	configure(){
		var appRouterConfig = function(config){
			config.title = 'RX';
			config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.

			config.map([
				{ route: '',  moduleId: './welcome',  nav: false, title:'welcome' },
                { route: 'signup',        moduleId: './signup',       nav: false, title:'Signup' },
								//{ route: 'test',        moduleId: './test',       nav: true, title:'Test' },
								{ route: 'contractor',        moduleId: './contractor',       nav: false, title:'Contractor' },
								{ route: 'resume',        moduleId: './resume',       nav: false, title:'Resumes' },
								{ route: 'chat',        moduleId: './chat',       nav: false, title:'Chat' },
								{ route: 'leads',        moduleId: './leads',       nav: false, title:'Leads' },
				{ route: 'job',        moduleId: './job',       nav: false, title:'Jobs' },
				{ route: 'login',        moduleId: './login',       nav: false, title:'Login' },
				{ route: 'logout',        moduleId: './logout',       nav: false, title:'Logout' },
				{ route: 'profile',        moduleId: './profile',       nav: false, title:'Profile' },

				]);
			};

		this.router.configure(appRouterConfig);
	}

}
