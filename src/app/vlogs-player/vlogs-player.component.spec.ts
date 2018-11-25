import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogsPlayerComponent } from './vlogs-player.component';

describe('VlogsPlayerComponent', () => {
  let component: VlogsPlayerComponent;
  let fixture: ComponentFixture<VlogsPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlogsPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
