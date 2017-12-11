import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DStoreComponent } from './d-store.component';

describe('DStoreComponent', () => {
  let component: DStoreComponent;
  let fixture: ComponentFixture<DStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
