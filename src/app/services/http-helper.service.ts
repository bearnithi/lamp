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

  getInstance(){

    return axios.create({
      baseURL:"http://192.168.2.189:43030",
      timeout: 3000,
      headers: {
        "X-Initialized-At": Date.now().toString()
      }
    });
  }

  feathersInstance(){

    
    const client = feathers();
    const restclient = feathersRestClient("http://192.168.2.189:43030") 
    client.configure(restclient.axios(axios));
    client.configure(feathersAuthClient({
      storage:window.localStorage as any
    }));
    
    return client
    
    }


}
