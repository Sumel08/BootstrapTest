import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCategoryComponent } from './c-category.component';

describe('CCategoryComponent', () => {
  let component: CCategoryComponent;
  let fixture: ComponentFixture<CCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
