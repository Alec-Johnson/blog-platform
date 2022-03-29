import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { environment } from 'src/environments/environment';
import { NavBarModule } from 'src/app/shared/modules/navBar/navBar.module';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { AuthInterceptor } from 'src/app/shared/services/authInterceptor.service';
import { GlobalFeedModule } from 'src/app/globalFeed/globalFeed.module';
import { YourFeedModule } from 'src/app/yourFeed/yourFeed.module';
import { TagFeedModule } from 'src/app/tagFeed/tagFeed.module';
import { ArticleModule } from './article/article.module';
import { CreateArticleModule } from './createArticle/createArticle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([]),
    NavBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule, // route: articles/new, Import this mdoule before ArticleModule, since "/new" is technically a slug and needs to be registered first
    ArticleModule, // route: articles/:slug
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
