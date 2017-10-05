import { TestBed, inject } from '@angular/core/testing';

import { Household_appliancesService } from './household_appliances.service';

describe('Household_appliancesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Household_appliancesService]
    });
  });

  it('should be created', inject([Household_appliancesService], (service: Household_appliancesService) => {
    expect(service).toBeTruthy();
  }));
});
