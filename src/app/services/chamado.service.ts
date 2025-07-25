import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Chamado } from '../models/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  /**************/  
  /* CONSTRUTOR */
  /**************/  
  constructor(private httpClient: HttpClient ) { }

  /***********/    
  /* MÉTODOS */
  /***********/
    // CONSULTAR / LISTAR TODOS OS CHAMADOS      
  findAll(): Observable<Chamado[]> {
    // Buscar todos os chamados no BD: observa a resposta e retorna um array de chamados, vindo do endpoint.
    return this.httpClient.get<Chamado[]>(`${API_CONFIG.baseUrl}/api/chamados`);
  }

}
