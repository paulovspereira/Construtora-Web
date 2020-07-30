import { Component, Input } from '@angular/core';


@Component({
    selector: 'ap-imob',
    templateUrl: 'imobiliaria.component.html'
})

export class ImobiliariaComponent {

    @Input() nome: '';
    @Input() email: '';
    @Input() foto: '';
    @Input() idade= 0;
    @Input() bugtet= '';
    @Input() companhia= '';

}