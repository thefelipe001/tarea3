import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Estudiantes=new Array();
  addEstudiantes=
  {
    name:"",
    lastname:"",
    cedula:""

  }
  visibleUddate:boolean=true;
  visibleedit:boolean=false;

  constructor(public navCtrl:NavController) {}
  execute(estudiantEdit){
    this.addEstudiantes=
    {
      name:"",
      lastname:"",
      cedula:""
  
    }

    this.update(estudiantEdit);



  }
  add(estudiante)
  {
    this.Estudiantes.push(estudiante);
    this.addEstudiantes=
    {name:"",lastname:"",cedula:"" };
  }
  edit(estudiante)
  {
    this.visibleUddate=false;
    this.visibleedit=true;

    this.addEstudiantes=
    {
      name:estudiante.name,
      lastname:estudiante.lastname,
      cedula:estudiante.cedula
      
    }
  }

  update(estudiantEdit)
  {    
    var i=this.Estudiantes.indexOf(estudiantEdit);
    this.Estudiantes.splice(i,1);
    this.Estudiantes.push(estudiantEdit);
    this.visibleUddate=true;
    this.visibleedit=false;



  }
  delete(namStudents)
  {
    var i=this.Estudiantes.indexOf(namStudents);
    this.Estudiantes.splice(i,1);
  }


}
