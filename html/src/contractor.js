import {inject, customElement, bindable} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import {HttpClient} from 'aurelia-fetch-client';
import $ from 'jquery';
import * as dataTable from 'datatables';

@inject(Element, HttpClient)

export class Map {
  constructor(element, http) {
    this.element = element;
    this.http = http;
    this.customers = [];
  }

  activate(){
    this.http.fetch('api/contractor')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.customers = data;
    });
  }

  attached(){
    setTimeout(function(){
      $('#js-table').dataTable({
        "paginate": true,
        "pageLength": 25,
        "jQueryUI": true,
      })
    },2500);

  }
}
