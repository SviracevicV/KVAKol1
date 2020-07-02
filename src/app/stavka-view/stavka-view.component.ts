import { Component, OnInit } from '@angular/core';
import { Artikal } from '../artikal';
import { Racun } from '../racun';
import { ArtikalService } from '../artikal.service';
import { RacunService } from '../racun.service';
import { StavkaRacuna } from '../stavka';

@Component({
  selector: 'app-stavka-view',
  templateUrl: './stavka-view.component.html',
  styleUrls: ['./stavka-view.component.css']
})
export class StavkaViewComponent implements OnInit {

  artikal: Artikal;
  racun: Racun;


  artikli: Artikal[];
  racuni: Racun[];
  stavkaRacuna: StavkaRacuna[];
  stavke: StavkaRacuna[];
  stavka: StavkaRacuna = new StavkaRacuna();
  private stavkaUrl = "http://localhost:3000/stavkaRacuna/";
  constructor(
    private artikalService:ArtikalService,
    private racunService: RacunService
  ) { }

  ngOnInit() {
    this.getArtikal();
    this.getRacun();
    this.getStavke();
  }
  getArtikal(): void{
    this.artikalService.getArtikli()
    .subscribe(artikli => this.artikli = artikli);
  }

  getRacun(): void{
    this.racunService.getRacuni()
    .subscribe(racuni => this.racuni = racuni);
  }

  getStavke(): void{
    this.racunService.getStavke()
    .subscribe(stavke => this.stavke = stavke);
  }

  onSubmit(): void{
    this.racunService.addStavka(this.stavka).subscribe(X => this.getStavke());
  }
  onDelete(stavka:StavkaRacuna) {
    
    this.stavke = this.stavke.filter(s => s.id !== stavka.id);
    // Remove from server
    this.racunService.deleteStavkaRacun(stavka).subscribe();
  }

}
