import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosHomeComponent } from './photos-home.component';

describe('PhotosHomeComponent', () => {
  let component: PhotosHomeComponent;
  let fixture: ComponentFixture<PhotosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
