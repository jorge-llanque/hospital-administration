import { TestBed } from '@angular/core/testing';

import { VisitNotesService } from './visit-notes.service';

describe('VisitNotesService', () => {
  let service: VisitNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
