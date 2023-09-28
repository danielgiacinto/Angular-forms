import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MateriaComponent } from './materia/materia.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MateriaComponent,
    AlumnoComponent,
    InscripcionesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
