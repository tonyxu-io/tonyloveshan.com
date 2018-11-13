import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintMapComponent } from './footprint-map.component';

describe('FootprintMapComponent', () => {
  let component: FootprintMapComponent;
  let fixture: ComponentFixture<FootprintMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootprintMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootprintMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
