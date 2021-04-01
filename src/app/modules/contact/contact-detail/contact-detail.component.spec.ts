import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../shared/shared.module';
import { contactList } from '../mock-data';
import { ContactService } from '../service/contact.service';
import { ContactMockService } from '../service/contact-service-mock';

import { ContactDetailComponent } from './contact-detail.component';
import { of } from 'rxjs';

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;
  let contactService: ContactService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get(id) { return 1 } } } } },
        { provide: ContactService, useClass: ContactMockService }
      ],
      declarations: [ContactDetailComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    contactService = TestBed.get(ContactService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call getContacts method of contact service and set value for contacts on call of loadContactDetails`, () => {
    const expectedResult = contactList.find((item) => item.employeeId === 1);
    const getContact = spyOn(contactService, 'getContact').and.callThrough();
    component.loadContactDetails(1)
    expect(getContact).toHaveBeenCalledWith(1);
    expect(component.contact).toEqual(expectedResult);
  });
});
