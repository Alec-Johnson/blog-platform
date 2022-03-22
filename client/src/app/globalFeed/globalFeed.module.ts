import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { GlobalFeedComponent } from 'src/app/globalFeed/components/globalFeed/globalFeed.component';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}