import { competicao } from './../../models';
import { ApiServiceService } from './../../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-proximas-competicoes',
  templateUrl: './table-proximas-competicoes.component.html',
  styleUrls: ['./table-proximas-competicoes.component.scss']
})
export class TableProximasCompeticoesComponent implements OnInit {

    public tableData!: competicao;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(){
    this.apiService.getCompeticao().subscribe((data) => {
      this.tableData = data;
    })
    console.log(this.tableData);
  }


}
