import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(public http:Http) { }
  getPosts(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts'+ id);
   }
  storePost(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',post);
    
  }

  removePost(id){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+ id);

  } 
 putPost(post){
   return this.http.put('https://jsonplaceholder.typicode.com/posts/'+ post.id ,post)
 }
 getUsers(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');
 }
}
