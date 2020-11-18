import { TestBed } from '@angular/core/testing';

import { TokenStoreManagerService } from './token-store-manager.service';

describe('TokenStoreManagerService', () => {
  let service: TokenStoreManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStoreManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
