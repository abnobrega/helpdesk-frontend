import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})

export class TecnicoListComponent implements OnInit {
  /*************/  
  /* ATRIBUTOS */
  /*************/  
  ELEMENT_DATA: Tecnico[] = []; 
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**************/  
  /* CONSTRUTOR */
  /**************/    
  constructor( 
    private tecnicoService: TecnicoService // Injeta um TecnicoService
  ) { }
  
  /***********/    
  /* MÉTODOS */
  /***********/      
  ngOnInit(): void { 
    // Toda vez que esse método iniciar quero chamar o método findAll()
    this.findAll();
  }

  findAll() {
    // Listar todos os técnicos e me inscrever no método para poder tratar a resposta
    this.tecnicoService.findAll().subscribe(resposta => {
      // O array ELEMENT_DATA recebe o array da resposta
      this.ELEMENT_DATA = resposta;
      // Quando a resposta chegar, vou carregar o datasource com o array ELEMENT_DATA
      this.dataSource = new MatTableDataSource<Tecnico>(resposta);
      // Trata a paginação da tela
      this.dataSource.paginator = this.paginator;
    });    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    
}