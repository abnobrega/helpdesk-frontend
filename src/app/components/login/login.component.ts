import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private toast: ToastrService) { }

  /***********/    
  /* MÉTODOS */
  /***********/   
  ngOnInit(): void {

  }

  logar() {
    this.toast.error('Usuário e/ou Senha inválidos!', 'Login')
    
    /* limpa os campos automaticamente */
    this.credencial.email = '';
    this.credencial.senha = '';
  }

  validarCampos(): boolean {
    if (this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }    
  }

}
