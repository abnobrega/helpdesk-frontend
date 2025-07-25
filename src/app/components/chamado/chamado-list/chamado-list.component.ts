import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { elementAt } from 'rxjs';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})

export class ChamadoListComponent implements OnInit {
  /*************/  
  /* ATRIBUTOS */
  /*************/   
  ELEMENT_DATA: Chamado[] = []; 
  
  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;  

  /**************/  
  /* CONSTRUTOR */
  /**************/    
  constructor( 
    private chamadoService: ChamadoService, // Injeta um ChamadoService
    private toastr: ToastrService
  ) { }
  
  /***********/    
  /* MÉTODOS */
  /***********/      
  ngOnInit(): void { 
    // Toda vez que esse método ngOnInit() for iniciado, quero chamar o método findAll()
    this.findAll();
  }  

  findAll(): void {
    this.chamadoService.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;      
      //console.log(resposta);
      //console.log(this.dataSource);
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
