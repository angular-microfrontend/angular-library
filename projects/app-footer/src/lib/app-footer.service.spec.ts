import { TestBed } from '@angular/core/testing';

import { AppFooterService } from './app-footer.service';

describe('AppFooterService', () => {
  let service: AppFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
