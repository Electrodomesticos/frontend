import { TestBed, inject } from '@angular/core/testing';

import { OutletsService } from './outlets.service';

describe('OutletsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutletsService]
    });
  });

  it('should be created', inject([OutletsService], (service: OutletsService) => {
    expect(service).toBeTruthy();
  }));
});
