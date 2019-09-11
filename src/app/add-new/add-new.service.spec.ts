import { TestBed } from '@angular/core/testing';

import { AddNewService } from './add-new.service';

describe('AddNewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewService = TestBed.get(AddNewService);
    expect(service).toBeTruthy();
  });
});
