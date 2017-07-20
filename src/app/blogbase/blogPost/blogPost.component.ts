import {Component, OnInit} from "@angular/core";
import {BlogPostService} from "./blogPost.service";
import {BlogPost} from "./blogPost.model";
@Component({
  templateUrl: './blogPost.component.html',
  selector: 'blg-blog-post'
})
export class BlogPostComponent implements OnInit {
    public blogPost: BlogPost = new BlogPost();
    constructor(private blogPostService: BlogPostService) {

    }

    private getBlogPost() {
        this.blogPostService.getAllBlogPosts().subscribe(res => {
            this.blogPost = res[0];
        });
    }

    ngOnInit() {
         this.getBlogPost();
    }
}
