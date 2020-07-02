import { Component, OnInit } from '@angular/core';
import { Artikal } from '../artikal';
import { Racun } from '../racun';
import { ArtikalService } from '../artikal.service';
import { RacunService } from '../racun.service';
import { StavkaRacuna } from '../stavka';

@Component({
  selector: 'app-stavka-add',
  templateUrl: './stavka-add.component.html',
  styleUrls: ['./stavka-add.component.css']
})
export class StavkaAddComponent implements OnInit {

  artikal: Artikal;
  racun: Racun;
  stavka: StavkaRacuna;

  artikli: Artikal[];
  racuni: Racun[];
  stavkaRacuna: StavkaRacuna[];
  stavke: StavkaRacuna[];
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
  onDelete(stavkaRacun:StavkaRacuna) {
    
    this.stavkaRacuna = this.stavkaRacuna.filter(s => s.id !== stavkaRacun.id);
    // Remove from server
    this.racunService.deleteStavkaRacun(stavkaRacun).subscribe();
  }

}
