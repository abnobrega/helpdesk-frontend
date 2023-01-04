import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})

/* AQUI VOU IMPLEMENTAR A REQUISIÇÃO HTTP */   
export class AuthService {
  
  /*************/  
  /* ATRIBUTOS */
  /*************/ 
  jwtService: JwtHelperService= new JwtHelperService();

  /**************/  
  /* CONSTRUTOR */
  /**************/    
  constructor(private http: HttpClient) { }

  /***********/    
  /* MÉTODOS */
  /***********/  
  authenticate(credenciais: Credenciais) {
    /* Método para fazer a autenticação do usuário */    
    return this.http.post(`${API_CONFIG.baseUrl}/login`, credenciais, {
      observe: 'response',
      responseType: 'text'
    })
  }  

  successfulLogin(authToken: string) {
    /* Método para guardar o token autenticado do usuário */       
    localStorage.setItem('token',authToken);
  }

  isAuthenticated() {
    /* Método para verificar se o token está autenticado (válido) */   
    let token = localStorage.getItem('token');
    if (token != null ) {
      /* Se não estiver expirado vai me retorar um true */
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }

}
