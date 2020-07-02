import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaDetailComponent } from './stavka-detail.component';

describe('StavkaDetailComponent', () => {
  let component: StavkaDetailComponent;
  let fixture: ComponentFixture<StavkaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
