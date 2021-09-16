import { competicao, podio, ranking } from './../models';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getCompeticao(): Observable<competicao>{
    return this.httpClient.get<competicao>(`${environment.apiUrl}/competicao`);
  }

  getPodio(): Observable<podio>{
    return this.httpClient.get<podio>(`${environment.apiUrl}/podios`);
  }

  getRanking(): Observable<ranking>{
    return this.httpClient.get<ranking>(`${environment.apiUrl}/ranking`);
  }

  postCompeticao(competicao: any) :Observable<competicao>{
    return this.httpClient.post<competicao>(`${environment.apiUrl}/competicao`, competicao, this.httpOptions );
  }

  deleteCompeticao(id: number) :Observable<competicao>{
    return this.httpClient.delete<competicao>(`${environment.apiUrl}/competicao/${id}`);
  }
}
