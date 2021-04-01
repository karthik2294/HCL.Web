import { Component, OnInit } from '@angular/core';
import { IContact } from '../models/contact';

// service
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  public contacts: IContact[];
  public nameFilter: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.loadContacts();
  }


  /**
   * this method is used to call the getContacts method of contact service to bind the grid data.
   */
  public loadContacts(): void {
    this.contactService.getContacts().subscribe((contacts: IContact[]) => {
      this.contacts = contacts;
    })
  }

}
