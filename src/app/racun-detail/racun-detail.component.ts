import { Component, OnInit,Input } from '@angular/core';
import { Racun } from '../racun';

import { RacunService } from '../racun.service';
import { ActivatedRoute } from '@angular/router';
import { StavkaRacuna } from '../stavka';
@Component({
  selector: 'app-racun-detail',
  templateUrl: './racun-detail.component.html',
  styleUrls: ['./racun-detail.component.css']
})
export class RacunDetailComponent implements OnInit {
  @Input() racun: Racun;
  @Input() stavka:StavkaRacuna;

  constructor(
    private route: ActivatedRoute,
    private racunService: RacunService
  ) { }

  ngOnInit(): void{
    this.getRacun();
    this.getStavka();
  }

  getRacun():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.racunService.getRacun(id)
    .subscribe(racun => this.racun = racun);
  }


getStavka():void{
  const id = +this.route.snapshot.paramMap.get('id');
  this.racunService.getStavka(id)
  .subscribe(stavka => this.stavka = stavka);
}
}
