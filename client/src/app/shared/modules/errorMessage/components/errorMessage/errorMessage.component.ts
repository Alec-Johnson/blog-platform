import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-error-message',
  template: '<div>{{ messageProps }}</div>',
})
export class ErrorMessageComponent {
  @Input('message') messageProps: string | null = 'Something went wrong';
}
