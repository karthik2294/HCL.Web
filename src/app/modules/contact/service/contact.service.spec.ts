import { async, TestBed } from '@angular/core/testing';
import { AppConstants } from '../../../shared/contants';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';

import { contactList } from '../mock-data';
import { ContactService } from './contact.service';
import { HttpServiceMock } from '../../../shared/mocks/http-service-mock';
import { of } from 'rxjs';

describe('ContactService', () => {
  let service: ContactService
  let httpClient: HttpClient;
  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AppConstants, ContactService,
      { provide: HttpClient, useClass: HttpServiceMock }]
  })));

  beforeEach(() => {
    service = TestBed.get(ContactService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return the contactList on call of get method of htttpClient`, () => {
    service.getContacts().subscribe((data) => {
      expect(data).toEqual(contactList);
    })
  })

  it(`should return the contactList on call of get method of htttpClient`, () => {
    let contact;
    const spy = spyOn(httpClient, 'get').and.callFake(() => {
      contact = contactList.find((item) => item.employeeId === 1);
      return of(contact) as any;
    })
    service.getContact(1).subscribe((data) => {
      expect(data).toEqual(contact);
    })
  })
});
