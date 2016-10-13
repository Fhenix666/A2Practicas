"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var EstudianteComponent = (function () {
    function EstudianteComponent() {
        this.title = "Lista de estudiantes de la iniversidad: ";
        this.estudiantes = ['Fher', 'Juan', 'Pepe'];
        this.urlImg = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI7T7nFLwUEmG_nmDkg4pvQT6lb9Ot0enREA6erp0hORUhLnpYiQ";
        this.redondear = false;
        this.pading = true;
    }
    EstudianteComponent.prototype.cambiar = function (evento) {
        this.title = evento.target.value;
    };
    EstudianteComponent.prototype.getListaEstidiante = function () {
        if (this.universidad == "Uni") {
            return ["Juan ", "Pepe", "Luis"];
        }
        else {
            return ["Fher", "Otto"];
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EstudianteComponent.prototype, "universidad", void 0);
    EstudianteComponent = __decorate([
        core_1.Component({
            selector: 'estudiantes',
            // template: '<h3>Lista de Estudiantes</h3> {{estudiantes}}'
            template: "<div [style.padding] = \"pading ? 40: 0\">\n                    <h3>{{title}}:{{universidad}}</h3>\n                    <ul>\n                        <li *ngFor='let estudiante of getListaEstidiante()'>\n                            {{estudiante}}\n                        </li>\n                    </ul>\n                    <input type=\"text\" [(ngModel)]=\"title\"/>\n                    <input type=\"text\"  (input)=cambiar($event)/>\n                    <button (click)=\"title='hola'\">ResetData</button>\n                    </div>\n                "
        }), 
        __metadata('design:paramtypes', [])
    ], EstudianteComponent);
    return EstudianteComponent;
}());
exports.EstudianteComponent = EstudianteComponent;
//# sourceMappingURL=estudiante.component.js.map