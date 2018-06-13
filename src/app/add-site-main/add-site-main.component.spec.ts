import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteMainComponent } from './add-site-main.component';

describe('AddSiteMainComponent', () => {
  let component: AddSiteMainComponent;
  let fixture: ComponentFixture<AddSiteMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSiteMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
