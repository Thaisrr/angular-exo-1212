import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Task, Tasks} from "../models/Task";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  api_url = 'http://localhost:8080/todos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tasks> {
    return this.http.get<Tasks>(this.api_url);
  }

  remove(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.api_url}/${id}`);
  }

  create(todo: Task) :Observable<Task> {
    return this.http.post<Task>(this.api_url, todo);
  }

  update(todo: Partial<Task>, id: number): Observable<Task> {
    return this.http.patch<Task>(`${this.api_url}/${id}`, todo);
  }


}
