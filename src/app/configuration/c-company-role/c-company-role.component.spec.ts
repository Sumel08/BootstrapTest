import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCompanyRoleComponent } from './c-company-role.component';

describe('CCompanyRoleComponent', () => {
  let component: CCompanyRoleComponent;
  let fixture: ComponentFixture<CCompanyRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCompanyRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCompanyRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
