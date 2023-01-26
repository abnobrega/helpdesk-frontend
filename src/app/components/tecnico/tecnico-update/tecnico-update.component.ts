import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent {

  /*************/  
  /* ATRIBUTOS */
  /*************/    
  tecnico: Tecnico = {
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
    private tecnicoService: TecnicoService,
    private toast: ToastrService,
    private router: Router,
    private activateRoute: ActivatedRoute  // Atributo que permite que eu dê um GET em parâmetros na minha URL
  ) { }

  /***********/    
  /* MÉTODOS */
  /***********/    
  ngOnInit(): void { 
    // Ao inciar este componente, será chamado este método e temos os seguintes passos:
    // (1) acessa a URL, (2) mapeia os parãmetros da URL e (3) dar um GET no parâmetro de nome id, 
    // conforme foi declarada no app.routing.modules.ts => { path: 'tecnicos/update/:id', ...}
    this.tecnico.id = this.activateRoute.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.tecnicoService.findById(this.tecnico.id).subscribe(resposta => {
      resposta.perfis = [];
      this.tecnico = resposta; // A resposta vem com as informeções de um técnico.
    })
  }

  // ATUALIZAR UM TÉCNICO
  atualizarTecnico(): void {
    this.tecnicoService.atualizarTecnico(this.tecnico).subscribe(resposta => {
      // Quando a resposta chegar, se eu conseguir cadastrar esse técnico com sucesso,
      // quero imprimir uma mensagem para o usuário informando isto.
      this.toast.success('Tecnico atualizado com sucesso', 'Atualização de Técnico');
      // Retorna para a página 'listar de técnicos'
      this.router.navigate(['tecnicos']); //
    }, ex => {
      //console.log(ex); // Lança a exceção no console pra ser visualizada. 
      if (ex.error.erros) {
        this.toast.success('Existe array de erros', 'Existe array de erros');
        // Existe array de erros e preciso percorrer esse array e tratar os erros.
        ex.error.erros.forEach(element => {
          // para cada elemento do meu array de erros, exibe a msg de erro deste elemento.
          this.toast.error(element.message); 
        });
      } else {
        this.toast.success('Existe UM erro', 'Existe UM erro');
        // Exibe a msg de erro específica do únici erro encontrado
        this.toast.error(ex.error.message); 
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

  // Adiciona os perfis selecionados no HTML ao array de perfis do novo usuário técnico.
  // Este método recebe um perfil pode ser any: um integer ou uma string e não retorna nada. 
  addPerfil(perfil: any): void {
    // Verifica se o perfil selecionado já está na lista de perfis   
    // Verifica se é para adicionar um novo perfil, ou excluir um perfil desmarcado
    if (this.tecnico.perfis.includes(perfil)) {
       // SIM, JÁ EXISTE! Então, remove o perfil da lista de perfis, na exata posição do índice informado (perfil)      
      this.tecnico.perfis.splice(this.tecnico.perfis.indexOf(perfil), 1);
    } else {
      //  PERFIL NÃO EXISTE! LOGO, ADICIONO O PERFIL NA LISTA DE PERFIS.
      this.tecnico.perfis.push(perfil);
    }
    // console.log(this.tecnico.perfis);  Exibe no console a lista de perfis

  }

}
