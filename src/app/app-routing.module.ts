import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCompeticaoComponent } from './views/edit-competicao/edit-competicao.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "olimpiadas", pathMatch: 'full'},
  { path: "olimpiadas", component: HomeComponent },
  { path: "edit/:id", component: EditCompeticaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
