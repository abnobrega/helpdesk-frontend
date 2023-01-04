import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**************/  
  /* CONSTRUTOR */
  /**************/  
  constructor(private authService: AuthService, private router: Router) { 

  }  

  /***********/    
  /* MÉTODOS */
  /***********/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      // Obtém o reultado do método authService.isAuthenticated()
      let authenticated = this.authService.isAuthenticated();

      if (authenticated) {
        return true; 
      } else {
        // A rota de login vai ser carregada para o usuário não autenticado
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
