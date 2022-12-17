import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    // Inicia a tela, fazendo o componente home ser renderiado assim que o usuário acessar o sistema.
    this.router.navigate(['home'])
  }

}
