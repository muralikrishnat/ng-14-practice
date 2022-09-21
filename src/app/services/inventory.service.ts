import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(private http: HttpClient) { }
  fetchRecords(): any {
    return this.http.get('http://localhost:3434/');
  }
  deleteRecord(id: string):any {
    return this.http.delete('http://localhost:3434/?id=' + id);
  }
  addEditRecord(record: any):any {
    return this.http.post('http://localhost:3434', record);
  }
  getRecord(id: string): any {
    return this.http.get('http://localhost:3434/?id=' + id);
  }
}
