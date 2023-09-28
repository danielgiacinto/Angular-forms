import { Component, OnInit } from '@angular/core';
import { Materia } from '../clases/materia';
import { MateriaServiceService } from '../servicios/materia-service.service';

@Component({
  selector: 'co-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  constructor(public materiaService : MateriaServiceService) { }

  ngOnInit(): void {
  }

  nombre: string = '';
  cupos: number = 0;
  
  materiaNueva() {
    
    var materia = new Materia();
    materia.nombre = this.nombre;
    materia.cupos = this.cupos;
    for(var i = 0; i < this.materiaService.materias.length; i++){
      if(this.materiaService.materias[i].nombre == materia.nombre){
        alert('Ya existe la materia ' + materia.nombre);
        return;
      }
    }
    if(materia.nombre != '' && materia.cupos > 0){
      this.materiaService.agregarMateria(materia);
      alert('Materia registrada con exito !!');
    }

  }
}
