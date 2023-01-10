import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  /**************/  
  /* CONSTRUTOR */
  /**************/  
  constructor( private httpClient: HttpClient ) { }

  /***********/    
  /* MÉTODOS */
  /***********/
  // CONSULTAR A LISTA DE TÉCNICOS      
  findAll(): Observable<Tecnico[]> {
    // Buscar todos os técnicos no BD: observa a resposta e retorna um array de técnicos, vindo do endpoint.
    return this.httpClient.get<Tecnico[]>(`${API_CONFIG.baseUrl}/api/tecnicos`);
  }

  // EXCLUIR UM NOVO TÉCNICO  

  // INCLUIR UM NOVO TÉCNICO: Faz a requisição pra incluir um novo técnico no SGBDR.
  incluirTecnico(tecnico: Tecnico): Observable<Tecnico> {
    // Retorna um Tecnico e passa a URL e o tecnico no corpo da requisição.
    return this.httpClient.post<Tecnico>(`${API_CONFIG.baseUrl}/api/tecnicos`, tecnico);
  }

  // ATUALIZAR UM NOVO TÉCNICO

}
