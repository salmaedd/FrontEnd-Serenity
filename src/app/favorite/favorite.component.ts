import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }
  @Input('etat') etat=true;
  @Output('changeetat') changeetat=new EventEmitter;

  ngOnInit() {
  }
  change(){
    this.etat=!this.etat;
    this.changeetat.emit(this.etat);
  }

}
