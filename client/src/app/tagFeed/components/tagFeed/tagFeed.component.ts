import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.styles.scss'],
})
export class TagFeedComponent implements OnInit {
  tagName!: string;
  apiUrl!: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tagName = this.route.snapshot.paramMap.get('slug')!;
    console.log(this.tagName);

    this.apiUrl = `/articles?tag=${this.tagName}`;
  }
}
