import { Component } from '@angular/core';
import { EstudianteComponent } from './estudiante.component';

@Component({
  selector: 'my-app',
  template: '<h1>Aprende Angular 2 Fácilmente Hola</h1><estudiantes></estudiantes>',
  directives: [EstudianteComponent]
  
})
export class AppComponent { }