import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './componentes/template/template.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'descripcion/:id', component: DescripcionComponent },
  { path: 'home', component: TemplateComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
