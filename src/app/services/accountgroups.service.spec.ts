import { TestBed } from '@angular/core/testing';

import { AccountgroupsService } from './accountgroups.service';

describe('AccountgroupsService', () => {
  let service: AccountgroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountgroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
