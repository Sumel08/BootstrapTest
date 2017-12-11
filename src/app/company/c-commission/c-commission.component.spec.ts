import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCommissionComponent } from './c-commission.component';

describe('CCommissionComponent', () => {
  let component: CCommissionComponent;
  let fixture: ComponentFixture<CCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
