import { TestBed, inject } from '@angular/core/testing';

import { HouseholdAppliancesService } from './household-appliances.service';

describe('HouseholdAppliancesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseholdAppliancesService]
    });
  });

  it('should be created', inject([HouseholdAppliancesService], (service: HouseholdAppliancesService) => {
    expect(service).toBeTruthy();
  }));
});
