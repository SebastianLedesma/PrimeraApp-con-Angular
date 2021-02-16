import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
  ];

  saludar = new EventEmitter<number>();

  constructor(){}

  agregarPersona(persona: Persona) {
    this.personas.push(persona);
  }

  encontrarPersona(index: number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index:number, persona:Persona){
    let personaAux = this.personas[index];
    personaAux.nombre = persona.nombre;
    personaAux.apellido = persona.apellido;
  }

  eliminarPersona(index: number){
    this.personas.splice(index,1);
  }
}
