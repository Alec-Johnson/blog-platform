import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { getArticleAction } from 'src/app/article/store/actions/getArticle.action';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { combineLatest, map, Observable } from 'rxjs';
import {
  articleSelector,
  isLoadingSelector,
} from 'src/app/article/store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { deleteArticleAction } from 'src/app/article/store/actions/deleteArticle.action';

@Component({
  selector: 'blog-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.styles.scss'],
})
export class ArticleComponent implements OnInit {
  slug!: string;
  article$!: Observable<ArticleInterface | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  isAuthor$!: Observable<boolean>;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')!;
    this.article$ = this.store.pipe(select(articleSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) {
            return false;
          }
          // Return true if the current user is the author of the article
          return article.author.username === currentUser.username;
        }
      )
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }
}
