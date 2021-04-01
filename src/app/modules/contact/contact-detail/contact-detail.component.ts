import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../models/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  public contactId: number;
  public contact: IContact;
  constructor(private route: ActivatedRoute, private contactService: ContactService) {
    this.contact = Object.assign({}, this.contact);
  }

  ngOnInit() {
    this.contactId = +this.route.snapshot.paramMap.get('id');
    this.loadContactDetails(this.contactId);
  }

  public loadContactDetails(employeeId: number): void {
    this.contactService.getContact(employeeId).subscribe((contact: IContact) => {
      this.contact = contact;
    });
  }

}
