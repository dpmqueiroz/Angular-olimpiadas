import { ranking } from './../../models';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnChanges {

  @Input() ranking!: ranking;
  public rankingView!: any;

  constructor() { }

  ngOnChanges(): void {
    this.rankingView = this.ranking;
  }
  active = 1;
}
