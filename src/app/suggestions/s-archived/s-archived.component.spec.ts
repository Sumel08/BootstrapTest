import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SArchivedComponent } from './s-archived.component';

describe('SArchivedComponent', () => {
  let component: SArchivedComponent;
  let fixture: ComponentFixture<SArchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SArchivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
