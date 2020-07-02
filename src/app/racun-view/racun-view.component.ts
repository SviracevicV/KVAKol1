import { Component, OnInit } from '@angular/core';
import { Racun} from '../racun';
import { RacunService } from '../racun.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-racun-view',
  templateUrl: './racun-view.component.html',
  styleUrls: ['./racun-view.component.css']
})
export class RacunViewComponent implements OnInit {

  racuni: Racun[];
  racun: Racun = new Racun();

  private racuniUrl = "http://localhost:3000/add/";


  constructor(
    private racunService: RacunService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getRacuni();
    this.getRacun();
  }

  getRacun(): void{
    this.racunService.getRacuni()
    .subscribe(racuni => this.racuni = racuni);
  }

  onSubmit(): void{
    this.racunService.addRacun(this.racun).subscribe(X => this.getRacun());
  }
  getRacuni(): void{
    this.racunService.getRacuni()
    .subscribe(racuni => this.racuni = racuni);
  }
  onDelete(racun:Racun) {
    
    this.racuni = this.racuni.filter(s => s.id !== racun.id);
    // Remove from server
    this.racunService.deleteRacun(racun).subscribe();
  }
}
