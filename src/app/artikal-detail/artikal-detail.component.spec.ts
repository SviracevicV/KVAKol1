import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikalDetailComponent } from './artikal-detail.component';

describe('ArtikalDetailComponent', () => {
  let component: ArtikalDetailComponent;
  let fixture: ComponentFixture<ArtikalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
