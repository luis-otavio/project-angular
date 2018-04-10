import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component'
import { MoviesService } from './movies/movies.service'
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MenuComponent } from './movie-detail/menu/menu.component';
import { ShoppingCartComponent } from './movie-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './movie-detail/menu-item/menu-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }