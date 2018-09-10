import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title:string="my courses";
  courses=['salma','aaa','zzzz'];
  nom;
  etat: boolean=true;
  et: boolean=true;

  constructor() { }

  ngOnInit() {
  }
ajouter(){
  if(this.nom !=""){
    this.courses.push(this.nom);
    this.nom="";
  }
 
}
delete(course){
  let index=this.courses.indexOf(course);
  this.courses.splice(index,1)
}
etats(){
  this.etat=this.etat;

}
add(n){
  
  console.log(n.value);
}
course={
  title:'SALMA',
  avis:2.227,
  prix:234.23,
  datepub: new Date(),
  content:'Lorem, ipsum dolor sit amet consectetur adipisicing el Accusantium ducimus ea perspiciatis accusamus blanditiis odio natus aut quibusdam ipsum nostrum, assumenda rerum numquam doloribus nemo et dicta molestiae aperiam! Eveniet.'
  

}

}
