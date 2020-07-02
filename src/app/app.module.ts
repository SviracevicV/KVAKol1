import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArtikalViewComponent } from './artikal-view/artikal-view.component';
import { ArtikalDetailComponent } from './artikal-detail/artikal-detail.component';
import { StavkaViewComponent } from './stavka-view/stavka-view.component';
import { StavkaDetailComponent } from './stavka-detail/stavka-detail.component';
import { RacunViewComponent } from './racun-view/racun-view.component';
import { RacunDetailComponent } from './racun-detail/racun-detail.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { StavkaAddComponent } from './stavka-add/stavka-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtikalViewComponent,
    ArtikalDetailComponent,
    StavkaViewComponent,
    StavkaDetailComponent,
    RacunViewComponent,
    RacunDetailComponent,
    PocetnaComponent,
    StavkaAddComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
