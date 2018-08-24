import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// do request http
import { HttpClientModule } from '@angular/common/http';

// pipes
import { NotImagesPipe } from './pipes/not-images.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// routes
import { SpotifyRoutes } from './app.routes';
import { TarjetaComponent } from './components/shared/tarjeta/tarjeta.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// service


@NgModule({
  // include components and pipes
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    SearchComponent,
    NavbarComponent,
    TarjetaComponent,
    FooterComponent,
    LoadingComponent,

    NotImagesPipe,
    SecureDomPipe,
  ],
  // include routes and request httpclient
  imports: [
    BrowserModule,
    SpotifyRoutes,
    HttpClientModule,
  ],
  // include services
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
