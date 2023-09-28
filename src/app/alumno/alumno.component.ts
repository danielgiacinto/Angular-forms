import { Component, OnInit } from '@angular/core';
import { MateriaServiceService } from '../servicios/materia-service.service';
import { Materia } from '../clases/materia';
import { Alumno } from '../clases/alumno';

@Component({
  selector: 'co-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor(public materiaService : MateriaServiceService) { }
  
  materias : string[] = []; 
  alumno : string = '';
  materiaSeleccionada : string = '';

  ngOnInit(): void {
    this.materias = this.materiaService.materias.map(materia => materia.nombre);
  }

  inscribirAlumno() {

    var alumno = new Alumno();
    alumno.alumno = this.alumno;
    alumno.materiaSeleccionada = this.materiaSeleccionada;
    
    if(alumno.alumno != '' && alumno.materiaSeleccionada != '' 
    && this.materiaService.materias.find(cupos => cupos.nombre === alumno.materiaSeleccionada && cupos.cupos > 0))
    {
      this.materiaService.agregarAlumno(alumno);
      alert('Se agrego con exito el Alumno ' + alumno.alumno);
    } 
    else if(this.materiaService.materias.find(cupos => cupos.nombre === alumno.materiaSeleccionada && cupos.cupos == 0)){
      alert('No hay cupos disponibles para la materia ' + alumno.materiaSeleccionada);
    }


    }

}
