import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogsHomeComponent } from './vlogs-home.component';

describe('VlogsHomeComponent', () => {
  let component: VlogsHomeComponent;
  let fixture: ComponentFixture<VlogsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlogsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
