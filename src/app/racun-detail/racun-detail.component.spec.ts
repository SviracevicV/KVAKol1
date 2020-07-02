import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunDetailComponent } from './racun-detail.component';

describe('RacunDetailComponent', () => {
  let component: RacunDetailComponent;
  let fixture: ComponentFixture<RacunDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacunDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacunDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
