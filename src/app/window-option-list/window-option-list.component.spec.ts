
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowOptionListComponent } from './window-option-list.component';

describe('WindowOptionListComponent', () => {
  let component: WindowOptionListComponent;
  let fixture: ComponentFixture<WindowOptionListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowOptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
