import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaAddComponent } from './stavka-add.component';

describe('StavkaAddComponent', () => {
  let component: StavkaAddComponent;
  let fixture: ComponentFixture<StavkaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
