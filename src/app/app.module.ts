import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

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
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
