import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent {

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
  
  /**************/  
  /* CONSTRUTOR */
  /**************/    
  constructor(
    private clienteService: ClienteService,
    private toast: ToastrService,
    private router: Router,
    private activateRoute: ActivatedRoute  
  ) { }

  /***********/    
  /* MÉTODOS */
  /***********/    
  ngOnInit(): void { 
    this.cliente.id = this.activateRoute.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.clienteService.findById(this.cliente.id).subscribe(resposta => {
      resposta.perfis = [];
      this.cliente = resposta; // A resposta vem com as informeções de um cliente.
    })
  }

  // EXCLUIR UM TÉCNICO
  excluirCliente(): void {
    this.clienteService.excluirCliente(this.cliente.id).subscribe(resposta => {
      this.toast.success('Cliente excluído com sucesso', 'Excluir Cliente');
      this.router.navigate(['clientes']); //
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
