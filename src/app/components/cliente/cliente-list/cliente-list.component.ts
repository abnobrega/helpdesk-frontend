import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})

export class ClienteListComponent implements OnInit {
  /*************/  
  /* ATRIBUTOS */
  /*************/  
  ELEMENT_DATA: Cliente[] = []; 
  
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**************/  
  /* CONSTRUTOR */
  /**************/    
  constructor( 
    private clienteService: ClienteService // Injeta um ClienteService
  ) { }
  
  /***********/    
  /* MÉTODOS */
  /***********/      
  ngOnInit(): void { 
    // Toda vez que esse método iniciar quero chamar o método findAll()
    this.findAll();
  }

  findAll() {
    // Listar todos os clientes e me inscrever no método para poder tratar a resposta
    this.clienteService.findAll().subscribe(resposta => {
      // Quando a resposta chegar, o array ELEMENT_DATA recebe o array da resposta
      this.ELEMENT_DATA = resposta;
      // Vou carregar o datasource com o array ELEMENT_DATA
      this.dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
      // Trata a paginação da tela
      this.dataSource.paginator = this.paginator;
    });    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    
}