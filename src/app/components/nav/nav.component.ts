import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router, 
    private authService: AuthService,
    private toast: ToastrService ) {
  }

  ngOnInit(): void {
    // Inicia a tela, fazendo o componente home ser renderiado assim que o usuário acessar o sistema.
    this.router.navigate(['home'])
  }

  logout() {
    // Fazer com que o sistema seja redirecionado para página de login (endpoint de login)
    this.router.navigate(['login'])

    // Chama método authService.logout() para limpar a variável localStorage.
    this.authService.logout(); 

    // Exibir mensagem para avisar que o usuário foi desconectado do sistema
    this.toast.info('Logout Realizado com Sucesso', 'Logout', { timeOut: 7000 });
  }

}
