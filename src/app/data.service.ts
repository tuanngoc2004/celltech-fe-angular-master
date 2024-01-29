import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('../../assets/dyanmicForm.json');
  }
}



// "useNewValue": true: cho phep them moi du lieu,
// "multipleValue": true : cho phep co nhieu du lieu,
// "logChanged": true,
// "clearAfterSubmit": true : reset sau khi submit,
// "defaultValue": gan placeholser