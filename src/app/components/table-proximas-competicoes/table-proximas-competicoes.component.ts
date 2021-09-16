import { competicao } from './../../models';
import { Component, Input, OnChanges } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-table-proximas-competicoes',
  templateUrl: './table-proximas-competicoes.component.html',
  styleUrls: ['./table-proximas-competicoes.component.scss']
})
export class TableProximasCompeticoesComponent implements OnChanges {

  @Input() competicoes!: competicao;
  public competicoesParaView!: any;

  constructor(
    private apiService: ApiServiceService
   ) { }

  ngOnChanges(): void {
    this.competicoesParaView = this.competicoes;
  }

  delete(id: number){
    this.apiService.deleteCompeticao(id).subscribe();
  }
}
