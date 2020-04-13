import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetailidComponent } from './customerdetailid.component';

describe('CustomerdetailidComponent', () => {
  let component: CustomerdetailidComponent;
  let fixture: ComponentFixture<CustomerdetailidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerdetailidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdetailidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
