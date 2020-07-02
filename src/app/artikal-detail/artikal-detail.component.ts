import { Component, OnInit,Input } from '@angular/core';
import { Artikal } from '../artikal';

import { ArtikalService } from '../artikal.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artikal-detail',
  templateUrl: './artikal-detail.component.html',
  styleUrls: ['./artikal-detail.component.css']
})
export class ArtikalDetailComponent implements OnInit {

  @Input() artikal: Artikal;

  constructor(
    private route: ActivatedRoute,
    private artikalService: ArtikalService
  ) { }

  ngOnInit(): void{
    this.getArtikal();
  }

  getArtikal():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.artikalService.getArtikal(id)
    .subscribe(artikal => this.artikal = artikal);
  }

}
