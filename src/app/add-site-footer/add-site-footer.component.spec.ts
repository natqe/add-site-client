import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteFooterComponent } from './add-site-footer.component';

describe('AddSiteFooterComponent', () => {
  let component: AddSiteFooterComponent;
  let fixture: ComponentFixture<AddSiteFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSiteFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
