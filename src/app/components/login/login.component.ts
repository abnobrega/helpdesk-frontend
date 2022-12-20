import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credencias } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /*************/  
  /* ATRIBUTOS */
  /*************/ 
  credencial: Credencias = {
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
  constructor() {

  }

  /***********/    
  /* MÉTODOS */
  /***********/   
  ngOnInit(): void {

  }

  validarCampos(): boolean {
    if (this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }    
  }

}
