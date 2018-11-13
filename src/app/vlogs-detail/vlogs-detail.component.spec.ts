import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogsDetailComponent } from './vlogs-detail.component';

describe('VlogsDetailComponent', () => {
  let component: VlogsDetailComponent;
  let fixture: ComponentFixture<VlogsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlogsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
