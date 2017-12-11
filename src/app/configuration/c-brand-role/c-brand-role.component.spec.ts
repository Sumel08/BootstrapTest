import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBrandRoleComponent } from './c-brand-role.component';

describe('CBrandRoleComponent', () => {
  let component: CBrandRoleComponent;
  let fixture: ComponentFixture<CBrandRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBrandRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBrandRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
