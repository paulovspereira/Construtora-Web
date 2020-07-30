import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imobiliarias = [

    {
      nome: 'Paulo Vinicius',
      email: 'paulosds@gmail.com',
      foto: 'assets/Paulo.jpg',
      idade: 33,
      bugtet: 'carro',
      companhia: 'Tegra'
    },
    {
      nome: 'Daniele Nascimento',
      email: 'daniesdsa@gmail.com',
      foto: 'assets/Daniele.jpg',
      idade: 38,
      bugtet: 'onibus',
      companhia: 'Odebrecht'
    },
    {
      nome: 'Enzo Nascimento',
      email: 'enzo789@gmail.com',
      foto: 'assets/Enzo.jpg',
      idade: 22,
      bugtet: 'taxi',
      companhia: 'EZTEC'
    }

  ];
}
