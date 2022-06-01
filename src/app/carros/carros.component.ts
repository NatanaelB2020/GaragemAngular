import { Component, OnInit } from '@angular/core';
import { CarroService } from '../core/services/carro.service';
import {Carro} from '../models/carro.model';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

  carros!: Carro[];

  carroSelecionado?: Carro;

  constructor(private service: CarroService){}

  ngOnInit(): void {
    this.getCarros();
  }

  selecionarCarro(c: Carro): void{
    this.carroSelecionado = c;
  }

  getCarros(): void {
    this.service.getAll().subscribe(carros => {
      this.carros = carros
      console.log(carros);
    });
  }

  remove(carro: Carro): void {
    this.service.delete(carro.id).subscribe(() => {
      this.carros = this.carros.filter(c => c.id != carro.id);
      window.alert('Carro deletado');
    });
  }
}
