import { Component } from '@angular/core';

@Component({
  selector: 'blog-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.styles.scss'],
})
export class CreateArticleComponent {
  initialValues = {
    title: 'Foo',
    description: 'Bar',
    body: 'Baz',
    tagList: ['foo', 'bar'],
  };

  onSubmit(res: any): void {
    console.log(res);
  }
}
