import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BProductComponent } from './b-product.component';

describe('BProductComponent', () => {
  let component: BProductComponent;
  let fixture: ComponentFixture<BProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
