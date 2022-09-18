import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  /* agregarPersonaje( event: Event ) {
    event.preventDefault();
    console.log(event.type);
  }


  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  */
  personajes: Personaje[] = [
    {nombre: 'Goku', poder: 15000},
    {nombre: 'Vegeta', poder: 8500},
    {nombre: 'Krillin', poder: 750}
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregarPersonaje() {
    if ( this.nuevo.nombre.trim().length === 0 ) {
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

}

interface Personaje {
  nombre: string;
  poder: number;
}
