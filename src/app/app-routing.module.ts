import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtikalViewComponent } from './artikal-view/artikal-view.component';
import { ArtikalDetailComponent } from './artikal-detail/artikal-detail.component';
import { StavkaViewComponent } from './stavka-view/stavka-view.component';
import { StavkaDetailComponent } from './stavka-detail/stavka-detail.component';
import { RacunViewComponent } from './racun-view/racun-view.component';
import { RacunDetailComponent} from './racun-detail/racun-detail.component';
import {PocetnaComponent} from './pocetna/pocetna.component';
import { StavkaAddComponent } from './stavka-add/stavka-add.component';


const routes: Routes = [
    {path:"",component:PocetnaComponent},
    {path: "artikli",component:ArtikalViewComponent},
    {path:"artikli/:id",component:ArtikalDetailComponent},
    {path:"racuni",component:RacunViewComponent},
    {path:"racuni/:id",component:RacunDetailComponent},
    {path:"stavka",component:StavkaViewComponent},
    {path:"stavka/:id",component:StavkaDetailComponent},
    {path:"stavke/add",component:StavkaAddComponent}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
