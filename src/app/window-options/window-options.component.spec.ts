import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowOptionsComponent } from './window-options.component';

describe('WindowOptionsComponent', () => {
  let component: WindowOptionsComponent;
  let fixture: ComponentFixture<WindowOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
