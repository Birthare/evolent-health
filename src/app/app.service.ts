import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import * as apiUrls from '../assets/apiUrls.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: '';
  apiBaseUrl = '';
  sep = '/';

  apis: any = (apiUrls as any).default;
  
  get(baseName :string, apiName: string, param?: string, paramSeparator?: string){
    var url = this.apiBaseUrl;

    if(baseName == 'mockData') url = '';
    else if(this.apis[baseName].base) url += this.apis[baseName].base + this.sep;
    
    url += this.apis[baseName][apiName];
    if(paramSeparator) url+= paramSeparator;
    if(param && String(param).trim().length > 0) url += param;
    return this.httpClient.get(url, {withCredentials: true});
  }
  
  post(baseName :string, apiName: string, param: any){
    var url = this.apiBaseUrl;
    
    if(baseName == 'mockData') url = '';
    else if(this.apis[baseName].base) url += this.apis[baseName].base + this.sep;
    url += this.apis[baseName][apiName];
    return this.httpClient.post(url, param, {withCredentials: true});
  }

  constructor(private httpClient: HttpClient) { }
}
