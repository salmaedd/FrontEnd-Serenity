import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post={title:'',body:'',id:'0',userId:'0'};
  myPosts=[];
  user={name: "",address: "",email: ""};
  myUser=[];
  etat:boolean=false;
  operation:boolean=false;
  constructor(public postService: PostService) { }

  ngOnInit() {
    this.recupPosts();
    this.recupUsers();
  }
  savePost(){
    this.postService.storePost(this.post).subscribe(post => {
      
      this.post.id=post.json().id;
      this.myPosts.unshift(this.post);
      this.post={title:'',body:'',id:'0',userId:'0'};
    })
    this.etat=!this.etat;
  }
  recupPosts (){
this.postService.getPosts().subscribe(posts=>this.myPosts=posts.json()
);
  }
  change(){
    this.etat=!this.etat;
  }
deletePost(id,index){
 
    if (confirm('etes vous sur?')){
    this.postService.removePost(id).subscribe(post=>{
    this.myPosts.splice(index,1);

  })
}}
editPost(post){
  this.operation=true;
  this.post=post;
  this.etat=true;
 }
 recupUsers (){
  this.postService.getUsers().subscribe(users=>this.myUser=users.json());

 }
 
 updatePost(){
   this.postService.putPost(this.post).subscribe(() =>{

    this.operation=!this.operation;
    this.etat=false;
    this.post={title:'',body:'',id:'0',userId:'0'};


   })
 }
 

}
