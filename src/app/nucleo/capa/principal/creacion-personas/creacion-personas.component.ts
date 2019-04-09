import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-personas',
  templateUrl: './creacion-personas.component.html'
})
export class CreacionPersonasComponent implements OnInit {
  
  public persona:personaDTO;
  public personas:personaDTO[];
  public mostrarFormulario:boolean;
  
  constructor() { }

  ngOnInit() {
	  this.persona={
		  id:'0',
		  nombre:'',
		  apellido:'',
		  tipoIdentificacion:'',
		  numeroIdentificacion:'',
		  mayorEdad:false,
		  sexo:'',
	  };
	  this.personas=[];
	  this.mostrarFormulario=true;
  }
  public mostrar(){}
  public ocultar(){}
  public guardar(){}
  public borrar(){}
  

}
