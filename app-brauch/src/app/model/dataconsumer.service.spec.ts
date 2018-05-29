import { TestBed, inject } from '@angular/core/testing';

import { DataconsumerService } from './dataconsumer.service';

describe('DataconsumerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataconsumerService]
    });
  });

  it('should be created', inject([DataconsumerService], (service: DataconsumerService) => {
    expect(service).toBeTruthy();
  }));
});
