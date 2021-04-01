import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../shared/shared.module';
import { ContactNameFilterPipe } from '../contact-name-filter-pipe/contact-name-filter.pipe';
import { contactList } from '../mock-data';
import { ContactMockService } from '../service/contact-service-mock';
import { ContactService } from '../service/contact.service';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let contactService: ContactService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListComponent, ContactNameFilterPipe],
      imports: [SharedModule, FormsModule, RouterTestingModule],
      providers: [{ provide: ContactService, useClass: ContactMockService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    contactService = TestBed.get(ContactService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getContacts method of contact service and set value for contacts on call of loadContacts', () => {
    const getContacts = spyOn(contactService, 'getContacts').and.callThrough();
    component.loadContacts();
    expect(getContacts).toHaveBeenCalled()
    expect(component.contacts).toEqual(contactList);
  });
});
