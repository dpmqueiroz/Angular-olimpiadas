import { competicao, podio } from './../models';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  getCompeticao(): Observable<competicao>{
    return this.httpClient.get<competicao>(`${environment.apiUrl}/competicao`);
  }

  getPodio(): Observable<podio>{
    return this.httpClient.get<podio>(`${environment.apiUrl}/podios`);
  }
}
