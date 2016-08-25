import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
@inject(HttpClient)
export class Customer {
  heading = 'Customer management';
  customers = [];

  url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(http){
    this.http = http;
  }

  activate(){

   return this.http.fetch(this.url)
   .then(response =>  response.json())
   .then(c => this.customers = c);

 }
}
