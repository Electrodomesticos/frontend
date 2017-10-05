import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdAppliancesComponent } from './household-appliances.component';

describe('HouseholdAppliancesComponent', () => {
  let component: HouseholdAppliancesComponent;
  let fixture: ComponentFixture<HouseholdAppliancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdAppliancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
