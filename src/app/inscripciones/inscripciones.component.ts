import { Component, OnInit } from '@angular/core';
import { MateriaServiceService } from '../servicios/materia-service.service';
import { Alumno } from '../clases/alumno';

@Component({
  selector: 'co-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  constructor(public materiaService : MateriaServiceService) { }

  alumnos : Alumno[] = this.materiaService.alumnos;
  ngOnInit(): void {
  }

  listarInscripciones(){
    return this.materiaService.alumnos;
  }

}
