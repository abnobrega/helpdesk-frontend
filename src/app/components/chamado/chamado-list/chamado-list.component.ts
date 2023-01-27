import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {
  /*************/  
  /* ATRIBUTOS */
  /*************/   
  ELEMENT_DATA: Chamado[] = [
    {
      id:             1,   
      dataAbertura:   '21/06/2021',
      dataFechamento: '21/06/2021',
      prioridade:      'ALTA',
      status:          'ANDANENTO',
      titulo:          'Chamado 1',
      descricao:       'Teste do chamado 1',
      tecnico:         1,
      cliente:         7,
      nomeCliente:     'Albert Einstein',
      nomeTecnico:     'Alexandre Bonturi Nóbrega'
    }, 
    {
      id:             2,   
      dataAbertura:   '23/06/2021',
      dataFechamento: '23/06/2021',
      prioridade:      'MEDIA',
      status:          'ENCERRADO',
      titulo:          'Chamado 2',
      descricao:       'Teste do chamado 2',
      tecnico:         2,
      cliente:         8,
      nomeCliente:     'Marie Curie',
      nomeTecnico:     'Ricardo Stallman'
    }
  ]; 
  
  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;  

  /**************/  
  /* CONSTRUTOR */
  /**************/    
  constructor( 
     ) { }
  
  /***********/    
  /* MÉTODOS */
  /***********/      
  ngOnInit(): void { 
    // Toda vez que esse método iniciar quero chamar o método findAll()
    //this.findAll();
  }  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
