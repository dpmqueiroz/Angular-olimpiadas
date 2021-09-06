import { podio } from './../../models';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table-resultado-competicoes',
  templateUrl: './table-resultado-competicoes.component.html',
  styleUrls: ['./table-resultado-competicoes.component.scss']
})
export class TableResultadoCompeticoesComponent implements OnChanges {

  @Input() podio!: podio;
  public podioParaView: any;

  constructor() { }

  ngOnChanges(): void {
    this.podioParaView = this.podio;
  }

}
