import { esporte, categoria } from './../../models';
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
  minDate!: Date;

  competicao: any = {
    "id": 1,
    "local_competicao":"",
    "horario":"",
    "limk_img_localCompeticao":"",
    "esporte": "",
    "categoria": ""
  }

  constructor(
    private apiService: ApiServiceService,
  ) { }

  ngOnInit(): void {
    this.comboBoxCategoria();
    this.comboBoxEsporte();
    const hoje = new Date();
    console.log(hoje.getDate());
    console.log(hoje.getMonth());
    console.log(hoje.getFullYear());
    this.minDate = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
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
