import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarrosComponent } from './carros/carros.component';
import { CarroComponent } from './carro/carro.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CarroCreateComponent } from './carro-create/carro-create.component';


@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    CarroComponent,
    CarroCreateComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
