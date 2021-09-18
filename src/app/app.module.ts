import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { TableProximasCompeticoesComponent } from './components/table-proximas-competicoes/table-proximas-competicoes.component';
import { TableResultadoCompeticoesComponent } from './components/table-resultado-competicoes/table-resultado-competicoes.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RankingComponent } from './components/ranking/ranking.component';
import { NovaCompeticaoComponent } from './components/nova-competicao/nova-competicao.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    NavbarComponent,
    FooterComponent,
    TableProximasCompeticoesComponent,
    TableResultadoCompeticoesComponent,
    RankingComponent,
    NovaCompeticaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
