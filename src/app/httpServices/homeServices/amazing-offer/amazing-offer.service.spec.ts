import { TestBed } from '@angular/core/testing';

import { AmazingOfferService } from './amazing-offer.service';

describe('AmazingOfferService', () => {
  let service: AmazingOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazingOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
