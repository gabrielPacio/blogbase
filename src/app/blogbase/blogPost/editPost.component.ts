import {Component} from "@angular/core";
import {BlogPost} from "./blogPost.model";
import {BlogPostService} from "./blogPost.service";
@Component({
  templateUrl: './editPost.components.html',
  selector: 'blg-edit-post'
})
export class EditPostComponent {
    public blogPost: BlogPost = new BlogPost();

    constructor(private blogPostService: BlogPostService) {}
    public submitPost() {
        this.blogPostService.createBlogPost(this.blogPost).subscribe(res => {
            console.log('GABPAC', res);
        });
    }
}
