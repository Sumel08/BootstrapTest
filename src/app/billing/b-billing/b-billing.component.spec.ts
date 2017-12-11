import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBillingComponent } from './b-billing.component';

describe('BBillingComponent', () => {
  let component: BBillingComponent;
  let fixture: ComponentFixture<BBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
