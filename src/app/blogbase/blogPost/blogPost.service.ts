import {Injectable} from "@angular/core";
import {BlogPost} from "./blogPost.model";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from "../../../environments/environment";

const API_URL = environment.apiUrl;


@Injectable()
export class BlogPostService {
    constructor(private http: Http) { }

    // API: GET /blogPosts
    public getAllBlogPosts(): Observable<BlogPost[]> {
        return this.http
            .get(API_URL + '/blogPosts')
            .map(res => {
                const blogPosts = res.json();
                return blogPosts.map(blogPost => new BlogPost(blogPost['blogPost']));
            })
            .catch(this.handleError);
    }

    // API: POST /blogPosts
    public createBlogPost(blogPost: BlogPost) {
        return this.http
            .post(API_URL + '/blogPosts', blogPost)
            .map(res => {
                return new BlogPost(res.json());
            })
            .catch(this.handleError);
    }

    // API: GET /blogPosts/:id
    public getBlogPostById(blogPostId: number) {
        return this.http
            .get(API_URL + '/blogPosts/' + blogPostId)
            .map(res => {
                return new BlogPost(res.json());
            })
            .catch(this.handleError)
    }

    // API: PUT /blogPosts/:id
    public updateBlogPost(blogPost: BlogPost) {
        return this.http
            .put(API_URL + '/blogPosts/' + blogPost.id, blogPost)
            .map(res => {
                return new BlogPost(res.json());
            })
            .catch(this.handleError);
    }

    // DELETE /blogPosts/:id
    public deleteBlogPostById(blogPostId: number) {
        return this.http
            .delete(API_URL + '/blogPosts/' + blogPostId)
            .map(res => null)
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }

}
