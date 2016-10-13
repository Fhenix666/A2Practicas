import { Component } from '@angular/core'

@Component({
    selector: 'estudiantes',
    // template: '<h3>Lista de Estudiantes</h3> {{estudiantes}}'
    template:   `<div [style.padding] = "pading ? 40: 0">
                    <h3>{{title}} </h3>
                    <ul>
                        <li *ngFor='let estudiante of estudiantes'>
                            {{estudiante}}
                        </li>
                    </ul>
                    <input type="text" [(ngModel)]="title"/>
                    <input type="text"  (input)=cambiar($event)/>
                    <button (click)="title='hola'">ResetData</button>
                    </div>
                `
})
export class EstudianteComponent {
    title = "Lista de estudiantes:";
    estudiantes = ['Fher','Juan','Pepe']
    urlImg = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI7T7nFLwUEmG_nmDkg4pvQT6lb9Ot0enREA6erp0hORUhLnpYiQ";
    redondear = false;
    pading = true;

    cambiar(evento)
    {
        this.title = evento.target.value;
    }
}