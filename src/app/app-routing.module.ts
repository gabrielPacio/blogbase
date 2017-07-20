import {RouterModule, Routes} from "@angular/router";
import {BlogPostComponent} from "./blogbase/blogPost/blogPost.component";
import {NgModule} from "@angular/core";
import {EditPostComponent} from "./blogbase/blogPost/editPost.component";
import {AuthorComponent} from "./blogbase/author/author.component";
import {AuthorEditComponent} from "./blogbase/author/authorEdit.component";
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: BlogPostComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'createAuthor', component: AuthorEditComponent},
  {path: 'create', component: EditPostComponent},
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
