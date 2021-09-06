import { competicao } from './../../models';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table-proximas-competicoes',
  templateUrl: './table-proximas-competicoes.component.html',
  styleUrls: ['./table-proximas-competicoes.component.scss']
})
export class TableProximasCompeticoesComponent implements OnChanges {

  @Input() competicoes!: competicao;
  public competicoesParaView!: any;

  constructor(  ) { }

  ngOnChanges(): void {
    this.competicoesParaView = this.competicoes;
  }

}
