import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccsesfulPaymentComponent } from './succsesful-payment.component';

describe('SuccsesfulPaymentComponent', () => {
  let component: SuccsesfulPaymentComponent;
  let fixture: ComponentFixture<SuccsesfulPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccsesfulPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccsesfulPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
