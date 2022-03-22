import { Component } from '@angular/core';

@Component({
  selector: 'blog-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.styles.scss'],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
