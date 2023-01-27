import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {

  /*************/  
  /* ATRIBUTOS */
  /*************/    
  cliente: Cliente = {
    id:          '',
    nome:        '',
    cpf:         '',
    email:       '',
    senha:       '',
    perfis:      [],
    dataCriacao: ''
  }
  nome : FormControl  = new FormControl(null, Validators.minLength(3));       
  cpf  : FormControl  = new FormControl(null, Validators.required);       
  email: FormControl = new FormControl(null, Validators.email);       
  senha: FormControl = new FormControl(null, Validators.minLength(3));   
  
  /**************/  
  /* CONSTRUTOR */
  /**************/    
  constructor(
    private clienteService: ClienteService,
    private toast: ToastrService,
    private router: Router  
  ) { }

  /***********/    
  /* MÉTODOS */
  /***********/    
  ngOnInit(): void { }

  // INCLUIR UM NOVO TÉCNICO
  incluirCliente(): void {
    this.clienteService.incluirCliente(this.cliente).subscribe((resposta) => {
      //console.log(resposta); // Lança a resposta no console pra ser visualizada.
      // Quando a resposta chegar, SE (eu conseguir cadastrar esse cliente com sucesso)
      // ENTÃO quero imprimir uma mensagem para o usuário informando isto.     
      this.toast.success('Cliente cadastrado com sucesso', 'Cadastro de Cliente');
      this.router.navigate(['clientes']); // Retorna para a página 'listar de clientes' 
    }, excecao => {
      if(excecao.error.errors) {
        excecao.error.errors.forEach(element => {
          //this.toast.success('Existe um array de erros', 'Existem vários erros');             
          this.toast.error(element.message);
        });
      } else {
        //this.toast.success('Existe um único erro', 'Existe um erro');           
        this.toast.error(excecao.error.message);
        //this.toast.error(excecao.error.status);
        //console.log(excecao);        
      }      
   
    })
  }

  // VALIDAR OS CAMPOS INFORMADOS 
  validaCampos(): boolean {
    return this.nome.valid
        && this.cpf.valid 
        && this.email.valid 
        && this.senha.valid;
  }

  // Adiciona os perfis selecionados no HTML ao array de perfis do novo usuário cliente.
  // Este método recebe um perfil pode ser any: um integer ou uma string e não retorna nada. 
  addPerfil(perfil: any): void {
    // Verifica se o perfil selecionado já está na lista de perfis   
    // Verifica se é para adicionar um novo perfil, ou excluir um perfil desmarcado

    // SE (PERFIL JÁ EXISTE) ENTÃO REMOVER SEÃO ADICIONAR NOVO PERFIL NA LISTA DE PERFIS
    if (this.cliente.perfis.includes(perfil)) {

       // SIM, JÁ EXISTE! Então, remove o perfil da lista de perfis, na exata posição do índice informado (perfil)      
      this.cliente.perfis.splice(this.cliente.perfis.indexOf(perfil), 1);
      // console.log(this.cliente.perfis);  Exibe no console a lista de perfis  

    } else {

      //  PERFIL NÃO EXISTE! LOGO, ADICIONO O PERFIL NA LISTA DE PERFIS.
      this.cliente.perfis.push(perfil);
      // console.log(this.cliente.perfis);  Exibe no console a lista de perfis      

    }

  }

}
