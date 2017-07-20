import {Component} from "@angular/core";
import {AuthorService} from "./author.service";
import {Author} from "./author.model";
@Component({
    templateUrl: './authorEdit.component.html',
    selector: 'blg-author-edit'
})
export class AuthorEditComponent {
    public author: Author = new Author();
    constructor(private authorService: AuthorService) {}

    public submitAuthor() {
        this.authorService.postAuthor(this.author).subscribe(res => {
            console.log('%c Response', 'color: white; background-color: orange;', res);
        });
    }
}
