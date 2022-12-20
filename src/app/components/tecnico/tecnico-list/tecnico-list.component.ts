import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})

export class TecnicoListComponent implements OnInit {
  /*************/  
  /* ATRIBUTOS */
  /*************/  
  ELEMENT_DATA: Tecnico[] = [ 
    {
      id: 1,
      nome: 'Alexandre Bonturi Nóbrega',
      cpf: '001.323.097-26',
      email: 'abonturi@gmail.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '19/12/2022'
    }
  ]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes' ];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  /**************/  
  /* CONSTRUTOR */
  /**************/    
  constructor() { }
  
  /***********/    
  /* MÉTODOS */
  /***********/      
  ngOnInit(): void { 
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}