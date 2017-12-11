import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BClusterComponent } from './b-cluster.component';

describe('BClusterComponent', () => {
  let component: BClusterComponent;
  let fixture: ComponentFixture<BClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
