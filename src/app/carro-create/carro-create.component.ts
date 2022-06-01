import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarroService } from '../core/services/carro.service';
import { Carro } from '../models/carro.model';

@Component({
  selector: 'app-carro-create',
  templateUrl: './carro-create.component.html',
  styleUrls: ['./carro-create.component.scss']
})
export class CarroCreateComponent implements OnInit {

  carro: Carro = {
    nome: '',
    cor: ''
  };

  constructor(
    private service: CarroService,
    private location: Location
    ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.add(this.carro).subscribe(() => {
      window.alert('Carro cadastrado!');
    });

    this.carro.nome = '';
    this.carro.cor = '';
  }

  goBack(): void {
    this.location.back();
  }

}
