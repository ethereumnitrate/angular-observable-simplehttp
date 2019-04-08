import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  //baseUrl:string = "https://jobs.github.com/positions.json?description=angular&location=new+york";
  baseUrl:string = "http://jobs.github.com/positions.json?description=python&location=new+york";
  constructor(private httpClient : HttpClient) { 

  }
  
  get_jobs(){
    return this.httpClient.get(this.baseUrl);
  }

  

}