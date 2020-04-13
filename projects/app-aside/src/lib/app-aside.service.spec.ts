import { TestBed } from '@angular/core/testing';

import { AppAsideService } from './app-aside.service';

describe('AppAsideService', () => {
  let service: AppAsideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAsideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
