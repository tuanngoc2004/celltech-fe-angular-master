import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseApi {
  protected baseUrl: string | undefined;

  constructor(protected httpClient: HttpClient) {}

  protected setEndpoint(hostUrl: string, endpoint: string) {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.replace(/^\/+/, '');
    }
    if (endpoint.endsWith('/')) {
      endpoint = endpoint.replace(/\/+$/, '');
    }
    if (hostUrl.endsWith('/')) {
      hostUrl = hostUrl.replace(/\/+$/, '');
    }
    this.baseUrl = `${hostUrl}/${endpoint}`;
  }

  protected createParams(params: { [key: string]: any }): HttpParams {
    return Object.keys(params).reduce((m, k) => {
      if (params[k] != null) {
        return m.set(k, params[k].toString());
      }
      return m;
    }, new HttpParams());
  }

  protected newCreateUrl(url?: string) {
    if (url && !url.startsWith('/')) {
      url = '/' + url;
    }
    return this.baseUrl + (url ? url : '');
  }

}
