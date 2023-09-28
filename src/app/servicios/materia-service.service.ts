import { Injectable } from '@angular/core';
import { Materia } from '../clases/materia';
import { Alumno } from '../clases/alumno';

@Injectable({
  providedIn: 'root'
})
export class MateriaServiceService {

  materias : Materia[] = [];
  alumnos : Alumno[] = [];

  constructor() { }

  agregarMateria(materia: Materia){
    this.materias.push(materia);
  }

  agregarAlumno(alumno: Alumno){
    this.alumnos.push(alumno);
    
    const materiaIndex = this.materias.findIndex(materia => materia.nombre === alumno.materiaSeleccionada);
    if (materiaIndex !== -1) {
        this.materias[materiaIndex].cupos--;
    }
  }
}
