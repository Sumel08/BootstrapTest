import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBrandComponent } from './b-brand.component';

describe('BBrandComponent', () => {
  let component: BBrandComponent;
  let fixture: ComponentFixture<BBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
