import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DRetailerComponent } from './d-retailer.component';

describe('DRetailerComponent', () => {
  let component: DRetailerComponent;
  let fixture: ComponentFixture<DRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
