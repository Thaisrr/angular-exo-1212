import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Tasks} from "../models/Task";
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


}
