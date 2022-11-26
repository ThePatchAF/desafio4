import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './componentes/template/template.component';
import { DescripcionComponent } from './descripcion/descripcion.component';

const routes: Routes = [
  { path: 'descripcion/:id', component: DescripcionComponent },
  { path: 'home', component: TemplateComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
