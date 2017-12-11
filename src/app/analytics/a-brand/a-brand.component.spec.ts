import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABrandComponent } from './a-brand.component';

describe('ABrandComponent', () => {
  let component: ABrandComponent;
  let fixture: ComponentFixture<ABrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
