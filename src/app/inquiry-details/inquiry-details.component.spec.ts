import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryDetailsComponent } from './inquiry-details.component';

describe('InquiryDetailsComponent', () => {
  let component: InquiryDetailsComponent;
  let fixture: ComponentFixture<InquiryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiryDetailsComponent]
    });
    fixture = TestBed.createComponent(InquiryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
