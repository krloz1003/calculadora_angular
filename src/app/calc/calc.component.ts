import { Component } from '@angular/core';

@Component({
    selector: 'calc',
    templateUrl: 'calc.component.html',
    styleUrls: ['calc.component.css']
})
export class CalcComponent {
    //Definir las variables que nuestro componente.
    public number1: number;
    public number2: number;
    public result: number;

    // Definiendo la función del noton agregar(Add).
    public add(){
        this.result = this.number1 + this.number2
    }


}