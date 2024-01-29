import {Inject, Injectable} from '@angular/core';
import {cloneDeep} from 'lodash';
import {HttpClient} from "@angular/common/http";
import {baseUrl} from "@core/services/base-url";
import {BaseApi} from '@core/services/base-api.service';
import {map, Observable, of} from "rxjs";
import {AuthenticationData, DynamicData, Response, SearchData, SearchResponse, Value} from './hub.model';
import {RequestType} from "@shared/services/hub.type";
import {DynamicForm} from "@shared/custom-input-controls/dynamic/form/form.model";


@Injectable()
export class DynamicService extends BaseApi {
  private sessionId: string | undefined;

  constructor(
    httpClient: HttpClient,
    @Inject(baseUrl) protected hostUrl: string) {
    super(httpClient);
    this.setEndpoint(hostUrl, 'hub');
    // this.sessionId = storage.get(AppDataStorageKey)?.session;
  }

  public apiCenter(data: object | string, parameters?: RequestType, recordId?: string | string[]): Observable<any> {
    switch (parameters) {
      case 'CREATE':
        return this.create(data as DynamicForm, '', 'CREATE');
      case 'UPDATE':
        return this.create(data as DynamicForm, recordId as string, 'UPDATE');
      case 'COPY':
        return this.create(data as DynamicForm, '', 'COPY');
      case 'DELETE':
        return this.newDelete(data as DynamicForm, recordId);
      case 'SEARCH':
      case 'SEARCH_DROPDOWN':
        return this.newSearch(data as SearchData);
      case 'EXPORT.EXCEL':
        return this.export(data as SearchData);
      case 'IMPORT_DATA':
        return this.importData(data as SearchData);
      case 'AUTHENTICATION':
        return this.authentication(data as AuthenticationData);
      case 'EXTERNAL_API':
        return this.callExternalApi(data as AuthenticationData);
      case 'PERMISSION':
        return this.checkPermission(data as DynamicData);
      case 'SETTING.FORM':
      case 'SETTING.VIEW':
      case 'SETTING.FILTER':
      case 'SETTING.LAYOUT':
      case 'SETTING.FEATURE':
      case 'SETTING.ADVANCED':
        return this.getSettingById(data, parameters);
      case 'PERMISSION.GET_ALL':
      case 'PERMISSION.GET_BY_AUTHORIZED_ID':
      case 'PERMISSION.GET_ALL_FORM_PERMISSION':
        return this.getPermissionObject(data, parameters);
      case 'PERMISSION.INSERT':
        return this.insertPermissionObject(data, parameters);
      case 'NESTEDSET.MOVE':
        return this.updateTreeItem(data as DynamicData);
      case 'NESTEDSET.SYNC':
        return this.syncTreeTable(data as DynamicData);
      case 'GET_HOME':
        return this.getHome(data as DynamicData);
      default:
        return of();
    }
  }

  //New api
  public updateTreeItem(data: DynamicData) {
    data.sessionId = this.sessionId;
    return this.httpClient.post<Response>(this.newCreateUrl(), data).pipe(map(response => response.data));
  }

  public syncTreeTable(data: DynamicData) {
    data.sessionId = this.sessionId;
    return this.httpClient.post<Response>(this.newCreateUrl(), data).pipe(map(response => response.data));
  }

  public getHome(data: DynamicData) {
    data.sessionId = this.sessionId;
    data.request = 'GET_HOME';
    return this.httpClient.post<Response>(this.newCreateUrl(), data).pipe(map(response => response.data));
  }

  public insertPermissionObject(jsonData: object | string, parameters: RequestType) {
    const data = {} as DynamicData;
    data.request = parameters;
    data.sessionId = this.sessionId;
    data.jsonData = jsonData as string;
    return this.httpClient.post<Response>(this.newCreateUrl(), data).pipe(map(response => response.data));
  }

  public getPermissionObject(objectId: object | string, parameters: RequestType) {
    const data = {} as DynamicData;
    data.request = parameters;
    data.sessionId = this.sessionId;
    data.data = [{
      name: 'ID',
      value: objectId.toString()
    } as Value];
    return this.httpClient.post<Response>(this.newCreateUrl(), data).pipe(map(response => response.data));
  }

  public getSettingById(formId: object | string, parameters: RequestType) {
    const data = {} as DynamicData;
    data.request = parameters;
    data.sessionId = this.sessionId;
    data.id = formId.toString();
    return this.httpClient.post<Response>(this.newCreateUrl(), data).pipe(map(response => response.data));
  }

  public checkPermission(data: DynamicData) {
    return this.httpClient.post<Response>(this.newCreateUrl(), data).pipe(map(response => response.data));
  }

  public callExternalApi(data: any) {
    return this.httpClient.post<Response>(this.newCreateUrl(), data);
  }

  public authentication(authenticationData: AuthenticationData): Observable<Response> {
    return this.httpClient.post<Response>(this.newCreateUrl(), authenticationData);
  }

  public getItemById(tableId: string, itemId: string): Observable<any> {
    const searchData = {} as SearchData;

    searchData.request = 'SEARCH';
    searchData.tableId = tableId;
    searchData.sessionId = this.sessionId;
    searchData.orderBy = [];
    searchData.paging = {
      skip: 0,
      take: 1
    };
    searchData.data = [{
      name: 'ID',
      value: itemId
    }] as Value[];
    return this.httpClient.post<SearchResponse>(this.newCreateUrl(), searchData).pipe(map(response => response.data && response.data.length ? response.data[0] : null));
  }

  private create(data: DynamicForm, recordId?: string, requestType?: RequestType) {
    const convertData = {} as DynamicData;

    convertData.request = requestType;
    convertData.actionId = data.actionId;
    convertData.tableId = data.tableId;
    convertData.sessionId = this.sessionId;
    convertData.formId = data.formId;

    const values = [] as Value[];
    Object.keys(data.data).forEach(key => {
      try {
        values.push({
          name: key,
          value: this.convertValue(data.data[key])
        });
      } catch (e) {
        console.log(data, data);
      }
    });
    convertData.data = values;
    if (recordId) {
      const index = convertData.data.findIndex(item => item.name === 'ID');
      if (index >= 0) {
        convertData.data[index].value = recordId;
      } else {
        convertData.data.push({
          name: 'ID',
          value: recordId
        });
      }
    }
    return this.httpClient.post(this.newCreateUrl(), convertData);
  }

  private convertValue(data: any) {
    switch (data.type) {
      case 'DATE_TIME':
        if (data.multipleValue) {
          return JSON.stringify(data.value).toString().trim();
        } else {
          return JSON.stringify(data.value).toString().trim();
        }
      default:
        if (data.multipleValue) {
          return JSON.stringify(data.value).toString().trim();
        } else {
          try {
            return data.value[0] ? data.value[0].toString().trim() : '';
          } catch (e) {
            console.log(data, data);
            return data.value[0];
          }
        }
    }
  }

  private newSearch(searchData: SearchData) {
    searchData.sessionId = this.sessionId;
    searchData.filterId = JSON.stringify(cloneDeep(searchData.filterId)) as any;

    return this.httpClient.post<SearchResponse>(this.newCreateUrl(), searchData).pipe(map(response => (
      {
        items: response.data ? response.data : [],
        pageSize: response.pageSize,
        totalRecord: response.totalRecord
      })
    ));
  }

  private export(searchData: SearchData) {
    searchData.sessionId = this.sessionId;
    searchData.request = 'EXPORT.EXCEL';
    searchData.filterId = JSON.stringify(cloneDeep(searchData.filterId)) as any;

    return this.httpClient.post<SearchResponse>(this.newCreateUrl(), searchData);
  }

  private importData(searchData: SearchData) {
    searchData.sessionId = this.sessionId;
    searchData.request = 'IMPORT_DATA';
    searchData.request = 'IMPORT_DATA';

    return this.httpClient.post<SearchResponse>(this.newCreateUrl(), searchData);
  }

  private newDelete(data: DynamicForm, listId: string | string[] | undefined) {
    const convertData = {} as DynamicData;

    convertData.request = 'DELETE';
    convertData.actionId = data.actionId;
    convertData.tableId = data.tableId;
    convertData.sessionId = this.sessionId;

    const values = [] as Value[];
    values.push({
      name: 'ID',
      value: JSON.stringify(listId)
    });

    convertData.data = values;
    return this.httpClient.post(this.newCreateUrl(), convertData);
  }
}
