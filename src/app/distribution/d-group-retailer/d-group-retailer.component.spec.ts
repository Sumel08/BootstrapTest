import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DGroupRetailerComponent } from './d-group-retailer.component';

describe('DGroupRetailerComponent', () => {
  let component: DGroupRetailerComponent;
  let fixture: ComponentFixture<DGroupRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DGroupRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DGroupRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
