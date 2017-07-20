import {Component} from "@angular/core";
import {Author} from "./author.model";
import {AuthorService} from "./author.service";
@Component({
  templateUrl: './author.component.html',
  selector: 'blg-author'
})
export class AuthorComponent {

  public author = new Author();
  constructor(private authorService: AuthorService) {
      authorService.getAuthorById('596e131f85c2c94e986dc93a').subscribe(res => {
          this.author = res;
      });
  }

}
