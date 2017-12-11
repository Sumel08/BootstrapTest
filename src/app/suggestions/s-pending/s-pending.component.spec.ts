import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPendingComponent } from './s-pending.component';

describe('SPendingComponent', () => {
  let component: SPendingComponent;
  let fixture: ComponentFixture<SPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
