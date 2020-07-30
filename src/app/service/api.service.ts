import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Imobiliaria } from '../model/imobiliaria';

  @Injectable()
  export class ApiService {

  
    private usersUrl: string;

    constructor(private http: HttpClient) {
        this.usersUrl = 'http://localhost:8080/imobiliaria';
     }

     public findAll(): Observable<Imobiliaria[]> {
        return this.http.get<Imobiliaria[]>(this.usersUrl);
      }

      public save(user: Imobiliaria) {
        return this.http.post<Imobiliaria>(this.usersUrl, user);
      }
}