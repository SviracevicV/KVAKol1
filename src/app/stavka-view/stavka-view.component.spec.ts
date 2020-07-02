import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaViewComponent } from './stavka-view.component';

describe('StavkaViewComponent', () => {
  let component: StavkaViewComponent;
  let fixture: ComponentFixture<StavkaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
