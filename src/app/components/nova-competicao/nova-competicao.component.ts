import { esporte, categoria } from './../../models';
import { competicao } from 'src/app/models';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-nova-competicao',
  templateUrl: './nova-competicao.component.html',
  styleUrls: ['./nova-competicao.component.scss']
})
export class NovaCompeticaoComponent implements OnInit {

  public esportes!: any;
  public categorias!: any;

  competicao: any = {
    "id": 1,
    "local_competicao":"",
    "horario":"",
    "limk_img_localCompeticao":"",
    "esporte": "",
    "categoria": ""
  }

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.comboBoxCategoria();
    this.comboBoxEsporte();
  }

  comboBoxEsporte(){
    this.apiService.getEsportes().subscribe((data: esporte) => {
      this.esportes = data;
    });
  }

  comboBoxCategoria(){
    this.apiService.getCategorias().subscribe((data: categoria) => {
      this.categorias = data;
    })
  }

  onSubmit(competicao: NgForm) {
    if(competicao.valid){
      this.apiService.postCompeticao(competicao.value).subscribe();
      alert("Competição adicionada com Sucesso");
    }else{
      alert("Os campos com * são obrigatórios");
    }
  }

}
