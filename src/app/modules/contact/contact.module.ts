import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

// child routings
import { ContactRouting } from './contact-routing';

// Service
import { ContactService } from './service/contact.service';



@NgModule({
  declarations: [ContactListComponent, ContactDetailComponent],
  imports: [
    CommonModule,
    ContactRouting,
  ],
  exports: [ContactListComponent, ContactDetailComponent],
  providers: [ContactService]
})
export class ContactModule { }
