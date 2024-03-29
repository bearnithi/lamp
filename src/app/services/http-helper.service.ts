import { Injectable } from '@angular/core';
import axios from "axios";
import feathers from '@feathersjs/feathers';
import feathersAuthClient from '@feathersjs/authentication-client';
import feathersRestClient from '@feathersjs/rest-client';


@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor() {

  }

  getHeaders() {
    return {
      headers: { Authorization: localStorage.getItem('feathers-jwt') }
    };
  }

  getInstance() {

    return axios.create({
      baseURL: "http://192.168.2.12:43030",
      timeout: 3000,
      headers: {
        'X-Initialized-At': Date.now().toString(),
      }
    });
  }

  getLocalInstance() {
    return axios.create({
      baseURL: '/',
      timeout: 3000,
      headers: {
        'X-Initialized-At': Date.now().toString(),
      }
    });
  }

  feathersInstance() {


    const client = feathers();
    const restclient = feathersRestClient("http://192.168.2.12:43030")
    client.configure(restclient.axios(axios));
    client.configure(feathersAuthClient({
      storage: window.localStorage as any
    }));


    return client;

  }


  create(service,data){
    return this.feathersInstance().service(service).create(data, this.getHeaders());
  }

  update(service, condition, data) {
    return this.feathersInstance().service(service).update(condition, data, this.getHeaders());
  }

  patch(service, condition, data) {
    return this.feathersInstance().service(service).patch(condition, data, this.getHeaders());
  }


  find(service, condition) {
    return this.feathersInstance().service(service).find(condition, this.getHeaders());
  }

  remove(service, condition) {
    return this.feathersInstance().service(service).remove(condition, this.getHeaders());
  }


}
