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
  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(){
    this.apiService.getCompeticao().subscribe((competicoes: competicao) => {
      this.competicoes = competicoes;
      console.log("Fui na API e voltei com isso :");
      console.log(this.competicoes);
    })
  }
}
