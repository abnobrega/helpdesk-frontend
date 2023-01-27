import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  /**************/  
  /* CONSTRUTOR */
  /**************/  
  constructor( private httpClient: HttpClient ) { }

  /***********/    
  /* MÉTODOS */
  /***********/
  // CONSULTAR UM TÉCNICO PELO ID
  findById(id: any): Observable<Cliente> {
    // Buscar um técnico no BD: observa a resposta e retorna um técnico, vindo do endpoint.    
    return this.httpClient.get<Cliente>(`${API_CONFIG.baseUrl}/api/clientes/${id}`);
  }

  // CONSULTAR / LISTAR TODOS OS TÉCNICOS      
  findAll(): Observable<Cliente[]> {
    // Buscar todos os técnicos no BD: observa a resposta e retorna um array de técnicos, vindo do endpoint.
    return this.httpClient.get<Cliente[]>(`${API_CONFIG.baseUrl}/api/clientes`);
  }

  // EXCLUIR UM TÉCNICO  
  excluirCliente(id: any): Observable<Cliente>{
    return this.httpClient.delete<Cliente>(`${API_CONFIG.baseUrl}/api/clientes/${id}`);
  } 
  
  // INCLUIR UM NOVO TÉCNICO: Faz a requisição pra incluir um novo técnico e fica observando
  incluirCliente(cliente: Cliente): Observable<Cliente> {
    // Retorna um Cliente e passa a URL e o cliente no corpo da requisição.
    return this.httpClient.post<Cliente>(`${API_CONFIG.baseUrl}/api/clientes`, cliente);
  }


  // ATUALIZAR UM TÉCNICO
  atualizarCliente(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${API_CONFIG.baseUrl}/api/clientes/${cliente.id}`, cliente);
  }

}
