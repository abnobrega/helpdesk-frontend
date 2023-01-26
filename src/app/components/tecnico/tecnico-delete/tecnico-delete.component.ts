import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent {

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
  
  /**************/  
  /* CONSTRUTOR */
  /**************/    
  constructor(
    private tecnicoService: TecnicoService,
    private toast: ToastrService,
    private router: Router,
    private activateRoute: ActivatedRoute  
  ) { }

  /***********/    
  /* MÉTODOS */
  /***********/    
  ngOnInit(): void { 
    this.tecnico.id = this.activateRoute.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.tecnicoService.findById(this.tecnico.id).subscribe(resposta => {
      resposta.perfis = [];
      this.tecnico = resposta; // A resposta vem com as informeções de um técnico.
    })
  }

  // EXCLUIR UM TÉCNICO
  excluirTecnico(): void {
    this.tecnicoService.excluirTecnico(this.tecnico.id).subscribe(resposta => {
      this.toast.success('Tecnico excluído com sucesso', 'Excluir Técnico');
      this.router.navigate(['tecnicos']); //
    }, ex => {
      if (ex.error.erros) {
          //this.toast.success('Existe array de erros', 'Existe array de erros');
          ex.error.erros.forEach(element => {
          this.toast.error(element.message); 
        });
      } else {
        //this.toast.success('Existe UM erro', 'Existe UM erro');
        this.toast.error(ex.error.message); 
      }

    })
  }

}
