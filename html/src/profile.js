import {AuthService} from 'aurelia-auth';
import {CustomHttpClient} from './customHttpClient';
import {inject} from 'aurelia-framework';
import {json} from 'aurelia-fetch-client';
@inject(AuthService , CustomHttpClient, json)
//deletion of inputs -- http://blog.williamhayes.org/2015/08/dynamic-input-list-in-aurelia.html
export class Profile{
	constructor(auth , http, json){
		this.auth = auth;
		this.http = http;
		this.profile = null;
	};
	activate(){
		return this.auth.getMe()
		.then(data=>{
			this.profile = data;
		});
	}
	heading = 'Profile';
	update(){
		 this.http.fetch('api/users', {
			 method: 'put',
			 body: json({
				 user : this.profile,
				 email : this.emailInput.value,
				 displayName : this.displayInput.value

			 })
			 })
			 .then(response => response.json())
			 .then(savedComment => {
				 alert('Profile Updated!')
			 })
			 .catch(error => {
				 alert('Error saving comment!' + error);
			 });
	}

	link(provider){
		return this.auth.authenticate(provider, true, null)
		/*.then((response)=>{
			console.log("auth response " + response);
			return this.auth.getMe();
		})*/
		.then(()=> this.auth.getMe())
		.then(data=>{
			this.profile = data;
		})
        .catch(err=>{
			console.log("profile failure");
		});
	}
	email='';
	password='';
	displayName = '';

}
