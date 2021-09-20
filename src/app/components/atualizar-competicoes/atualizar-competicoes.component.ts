import { Competicao } from './competicao';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { categoria, esporte, competicao } from 'src/app/models';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atualizar-competicoes',
  templateUrl: './atualizar-competicoes.component.html',
  styleUrls: ['./atualizar-competicoes.component.scss']
})
export class AtualizarCompeticoesComponent implements OnInit {
  @Input() userId!: number;
  public esportes!: any;
  public categorias!: any;
  minDate!: Date;

  competicao: any ;

  formCompeticao!: FormGroup;

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.competicaoEditavel();
    this.createForm(new Competicao());
    this.comboBoxCategoria();
    this.comboBoxEsporte();
    const hoje = new Date();
    this.minDate = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    console.log(this.competicao);


    console.log(this.competicao);

  }

  competicaoEditavel(){
    this.apiService.getCompeticaoById(this.userId).subscribe((data :competicao) => {
      console.log('estou dentro do getcompetiçãobyid')
      this.competicao = data;
      console.log(this.competicao)
      this.createForm(this.competicao);
    })
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
    if(true){
      //this.apiService.postCompeticao(competicao.value).subscribe();
      alert("Salvo com Sucesso");
    }else{
      alert("Os campos com * são obrigatórios");
    }
  }

  createForm(competicaoRecebida: competicao){
    this.formCompeticao = this.formBuilder.group({
      id: [competicaoRecebida.id],
      local_competicao: [(competicaoRecebida.local_competicao)],
      dataCompeticao: [competicaoRecebida.dataCompeticao],
      link_img_localCompeticao: [competicaoRecebida.link_img_localCompeticao],
      categoria: [competicaoRecebida.categoria],
      esporte: [competicaoRecebida.esporte]
    })
  }

}
