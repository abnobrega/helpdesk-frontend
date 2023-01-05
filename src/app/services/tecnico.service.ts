import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor( private httpClient: HttpClient ) { }

  findAll(): Observable<Tecnico[]> {
    // Buscar todos os técnicos no BD: observa a resposta e retorna um array de técnicos, vindo do endpoint.
    return this.httpClient.get<Tecnico[]>(`${API_CONFIG.baseUrl}/api/tecnicos`);
  }
}
