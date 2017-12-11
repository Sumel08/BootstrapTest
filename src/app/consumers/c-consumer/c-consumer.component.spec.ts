import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CConsumerComponent } from './c-consumer.component';

describe('CConsumerComponent', () => {
  let component: CConsumerComponent;
  let fixture: ComponentFixture<CConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
