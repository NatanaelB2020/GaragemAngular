import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroCreateComponent } from './carro-create/carro-create.component';
import { CarroComponent } from './carro/carro.component';
import { CarrosComponent } from './carros/carros.component';

const routes: Routes = [
  {
    path: 'carros',
    component: CarrosComponent
  },
  {
    path: 'carros/:id',
    component: CarroComponent
  },
  {
    path: 'create',
    component: CarroCreateComponent
  },
  {
    path: '',
    redirectTo: 'carros',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
