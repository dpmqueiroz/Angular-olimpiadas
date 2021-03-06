import { podio, ranking } from './../../models';
import { Component, OnInit } from '@angular/core';
import { competicao } from 'src/app/models';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  active = 1;
  public competicoes!: competicao ;
  public podio!: podio;
  public ranking!: ranking;
  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getTableData();
    this.getRankingData();
  }

  getTableData(){
    this.apiService.getCompeticao().subscribe((competicoes: competicao) => {
      this.competicoes = competicoes;
    })
  }

  getPodioData(){
    this.apiService.getPodio().subscribe((podio :podio) => {
      this.podio = podio;
      console.log("Fui na API e voltei com isso :");
      console.log(this.podio);
    })
  }

  getRankingData(){
    this.apiService.getRanking().subscribe((ranking :ranking) => {
      this.ranking = ranking;
      console.log("Fui na API e voltei com isso :");
      console.log(this.ranking);
    })
  }



}
