import { TestBed } from '@angular/core/testing';

import { ProcessPensionService } from './process-pension.service';

describe('ProcessPensionService', () => {
  let service: ProcessPensionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessPensionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
