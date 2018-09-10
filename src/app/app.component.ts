import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'capgeminicasa';
  etat:boolean=true;
  posts=[
    {vote:{up:1,down:3},favorite:true,id:1, title:'salma', decription:'edd'},
   {vote:{up:3,down:3}, favorite:true,id:2, title:'e', decription:'edd'},
   {vote:{up:2,down:3}, favorite:true,id:3, title:'saleemeea', decription:'edd'},
    {vote:{up:1,down:3},favorite:true,id:4, title:'salma', decription:'edd'}
  
 ] 
 mymethode($event,post){
   post.favorite=$event;
   console.log("salma")
 }
}
