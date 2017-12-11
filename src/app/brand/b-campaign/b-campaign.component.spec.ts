import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCampaignComponent } from './b-campaign.component';

describe('BCampaignComponent', () => {
  let component: BCampaignComponent;
  let fixture: ComponentFixture<BCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
