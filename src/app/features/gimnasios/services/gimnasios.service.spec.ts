import { TestBed } from '@angular/core/testing';

import { GimnasiosService } from './gimnasios.service';

describe('GimnasiosService', () => {
  let service: GimnasiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GimnasiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
