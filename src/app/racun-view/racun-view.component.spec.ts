import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunViewComponent } from './racun-view.component';

describe('RacunViewComponent', () => {
  let component: RacunViewComponent;
  let fixture: ComponentFixture<RacunViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacunViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacunViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
