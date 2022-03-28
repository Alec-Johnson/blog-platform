import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';
import { TagListModule } from '../shared/modules/tagList/tagList.module';
import { ArticleService } from '../shared/services/article.service';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}