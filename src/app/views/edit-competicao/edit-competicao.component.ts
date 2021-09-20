import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-competicao',
  templateUrl: './edit-competicao.component.html',
  styleUrls: ['./edit-competicao.component.scss']
})
export class EditCompeticaoComponent implements OnInit {

  public userId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userId = params['id']);
   }

  ngOnInit(): void {
  }

}
