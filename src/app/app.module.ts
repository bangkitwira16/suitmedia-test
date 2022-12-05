import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/components/header/header.component';
import { LazyImageLoadingDirective } from './shared/directives/image.directive';
import { BannerComponent } from './shared/components/banner/banner.component';
import { IdeasComponent } from './views/ideas/ideas.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { HomeComponent } from './views/home/home.component';
import { CardPostComponent } from './shared/components/card-post/card-post.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { CardPlaceholderComponent } from './shared/components/card-placeholder/card-placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LazyImageLoadingDirective,
    BannerComponent,
    IdeasComponent,
    DropdownComponent,
    HomeComponent,
    CardPostComponent,
    PaginationComponent,
    CardPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
