import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteHaederComponent } from './add-site-haeder.component';

describe('AddSiteHaederComponent', () => {
  let component: AddSiteHaederComponent;
  let fixture: ComponentFixture<AddSiteHaederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSiteHaederComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteHaederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
