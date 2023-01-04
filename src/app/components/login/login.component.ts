import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /*************/  
  /* ATRIBUTOS */
  /*************/ 
  credenciais: Credenciais = {
    email: '',
    senha: ''
  }

  /* valida se o email é válido */
  email = new FormControl(null, Validators.email);
  /* valida se a senha tem um mínimo de 3 caracters */  
  senha = new FormControl(null, Validators.minLength(3));  

  /**************/  
  /* CONSTRUTOR */
  /**************/  
  constructor(
    private toast: ToastrService,  
    private authService: AuthService,
    private router: Router) { 
  }

  /***********/    
  /* MÉTODOS */
  /***********/   
  ngOnInit(): void {

  }

  logar() {
    this.authService.authenticate(this.credenciais).subscribe(resposta => {
      /* this.toast.info(resposta.headers.get('Authorization')) */

      /* Parâmetro: passar o token que está dentro do header, na resposta da requisição. */
      this.authService.successfulLogin(resposta.headers.get('Authorization').substring(7));
      // Navegar para a rota do componente principal NAV
      this.router.navigate(['']);
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos');
    })
  }

  validarCampos(): boolean {
    if (this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }    
  }

}
