import { Component } from '@angular/core';

@Component({
  selector: 'co-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-challange';

  mostrarMateria: boolean = false;
  mostrarAlumno: boolean = false;
  mostrarInscripcion: boolean = false;

  mostrarComponente(componente: string) {
    this.mostrarAlumno = componente === 'alumno';
    this.mostrarInscripcion = componente === 'inscripcion';
    this.mostrarMateria = componente === 'materia';
  }
}
