import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaCompeticaoComponent } from './components/nova-competicao/nova-competicao.component';

const routes: Routes = [
  { path: "", redirectTo: "olimpiadas", pathMatch: 'full'},
  { path: "olimpiadas", component: NavbarComponent },
  { path: "edit", component: NovaCompeticaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
