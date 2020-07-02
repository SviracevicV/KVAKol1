import { Component, OnInit, Input } from '@angular/core';
import { StavkaRacuna } from '../stavka';

import { RacunService } from '../racun.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stavka-detail',
  templateUrl: './stavka-detail.component.html',
  styleUrls: ['./stavka-detail.component.css']
})
export class StavkaDetailComponent implements OnInit {
  @Input() stavka:StavkaRacuna;

  constructor(private route: ActivatedRoute,
    private racunService: RacunService)
  {}

  ngOnInit(): void {
    this.getStavka();
  }
  getStavka():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.racunService.getStavka(id)
    .subscribe(stavka => this.stavka = stavka);
  }
}
