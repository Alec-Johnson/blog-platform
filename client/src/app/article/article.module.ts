import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { TagListModule } from 'src/app/shared/modules/tagList/tagList.module';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { ArticleService } from 'src/app/article/services/article.service';
import { ArticleComponent } from 'src/app/article/components/article/article.component';
import { DeleteArticleEffect } from 'src/app/article/store/effects/deleteArticle.effect';
import { GetArticleEffect } from 'src/app/article/store/effects/getArticle.effect';
import { reducers } from 'src/app/article/store/reducers';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
