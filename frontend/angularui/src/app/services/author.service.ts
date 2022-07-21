import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Author } from '../components/author/author';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
  path = environment.path

  getAuthors():Observable<Author[]>{
    return this.http.get<Author[]>(this.path+"/author")
  }
}
