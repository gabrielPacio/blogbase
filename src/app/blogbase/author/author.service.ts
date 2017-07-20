import {Injectable} from "@angular/core";
import {Author} from "./author.model";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";

const API_URL = environment.apiUrl;

@Injectable()
export class AuthorService {

    constructor(private http: Http) {}

    public getAuthors(): Observable<Author[]> {
        return this.http
            .get(API_URL + '/authors')
            .map(res => {
                return new Author(res.json());
            })
            .catch(this.handleError);
    }

    public getAuthorById(authorId: string): Observable<Author> {
        return this.http
          .get(API_URL + '/authors/' + authorId)
          .map(res => {
              return new Author(res.json());
          })
          .catch(this.handleError);
    }

    public postAuthor(author: Author) {
        console.log('post author body:', author);

        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http
            .post(API_URL + '/authors', author, options)
            .map(res => {
                console.log('Inside the map:', res);
                return new Author(res.json());
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | {}) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
