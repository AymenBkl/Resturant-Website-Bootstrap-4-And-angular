import { TestBed } from '@angular/core/testing';

import { ProccesHttpMessagesService } from './procces-http-messages.service';

describe('ProccesHttpMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProccesHttpMessagesService = TestBed.get(ProccesHttpMessagesService);
    expect(service).toBeTruthy();
  });
});
