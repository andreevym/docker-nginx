import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
import {CustomHttpClient} from './customHttpClient';
import {json} from 'aurelia-fetch-client';
import $ from 'jquery';
import * as dataTable from 'datatables';

@inject(AuthService ,CustomHttpClient, json)

export class Datatable {
  products = [];
  user = null;
  selectedProducts = [];
  editing = null;
  edit(selectedProduct){
     this.editing = selectedProduct;
  }

  heading = 'Resumes';
  url = 'api/indeed';

  constructor(auth, http){
    this.http = http;
    this.auth = auth;
  }

  addList(){
    console.log(this.selectedProducts);
      this.http.fetch('api/users', {
        method: 'post',
        body: json({
          user : this.user,
          data : this.selectedProducts})
        })
        .then(response => response.json())
        .then(savedComment => {
          console.log(`Saved comment! ID: ${savedComment.name}`);
          alert('Resumes and edited info saved!')
        })
        .catch(error => {
          alert('Error saving comment!' + error);
        });
    }

    activate(){
      this.auth.getMe()
      .then(info => this.user = info);
      this.http.fetch(this.url)
      .then(response =>  response.json())
      .then(c => {
        this.products = c
      });
      this.http.fetch('api/users')
      .then(response => response.json())
      .then(data => {
          for(let n of data){
             this.selectedProducts = (JSON.parse(JSON.stringify(n.resumeList)));
          }
      });
    }

    attached() {
      setTimeout(function(){
        console.log("alert");
        $('#example').dataTable({
          "paginate": true,
          "pageLength": 25,
          "jQueryUI": true,
          })
      },1000);
    }
  }
