import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class CurdService {
   serviceURL:string;
  constructor(private http:HttpClient) {
    this.serviceURL="http://localhost:3000/messages";
  }
  addMessage(msg : message) : Observable<message> {
    return this.http.post<message>(this.serviceURL,msg);
  }

  getAllMessage() : Observable<message[]> {
    return this.http.get<message[]>(this.serviceURL);
  }

  deleteTask(msg : message) : Observable<message> {
    return this.http.delete<message>(this.serviceURL+'/'+msg.id);
  }

  editTask(msg : message) : Observable<message> {
    return this.http.put<message>(this.serviceURL+'/'+msg.id,msg);
  }

}
