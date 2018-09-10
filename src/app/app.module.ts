import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import {RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { VoteComponent } from './vote/vote.component';
import { PanelComponent } from './panel/panel.component';
import { FormComponent } from './form/form.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowPostComponent } from './show-post/show-post.component';
const routes:Routes=[
  {path:"",component:PostsComponent},
  {path:"favorite",component:FavoriteComponent},
  {path:"**",component:PageNotFoundComponent},
  {path:"posts/:id",component:ShowPostComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SidebarComponent,
    ResumePipe,
    FavoriteComponent,
    VoteComponent,
    PanelComponent,
    FormComponent,
    PostsComponent,
    PageNotFoundComponent,
    ShowPostComponent
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
