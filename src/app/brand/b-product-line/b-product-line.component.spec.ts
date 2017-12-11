import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BProductLineComponent } from './b-product-line.component';

describe('BProductLineComponent', () => {
  let component: BProductLineComponent;
  let fixture: ComponentFixture<BProductLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BProductLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BProductLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
