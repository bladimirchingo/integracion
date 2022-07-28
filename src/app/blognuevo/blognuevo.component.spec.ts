import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlognuevoComponent } from './blognuevo.component';

describe('BlognuevoComponent', () => {
  let component: BlognuevoComponent;
  let fixture: ComponentFixture<BlognuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlognuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlognuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
