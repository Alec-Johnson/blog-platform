import { Component } from '@angular/core';

@Component({
  selector: 'blog-your-feed',
  templateUrl: './yourFeed.component.html',
  styleUrls: ['./yourFeed.styles.scss'],
})
export class YourFeedComponent {
  apiUrl = '/articles/feed';
}
