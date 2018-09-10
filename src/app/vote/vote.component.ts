import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor() { }
  @Input('like') like;
  @Input('dislike') dislike;

  ngOnInit() {
  }
  count(){
    
this.like=this.like+1;

  }
  count2(){
    this.dislike=this.dislike+1;

  }

}
