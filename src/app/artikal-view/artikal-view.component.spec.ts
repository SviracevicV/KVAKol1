import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikalViewComponent } from './artikal-view.component';

describe('ArtikalViewComponent', () => {
  let component: ArtikalViewComponent;
  let fixture: ComponentFixture<ArtikalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
