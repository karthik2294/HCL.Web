import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../../shared/shared.module';

// components
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

// child routings
import { ContactRouting } from './contact-routing';

// Service
import { ContactService } from './service/contact.service';


// Pipes
import { ContactNameFilterPipe } from './contact-name-filter-pipe/contact-name-filter.pipe';



@NgModule({
  declarations: [ContactListComponent, ContactDetailComponent, ContactNameFilterPipe],
  imports: [
    CommonModule,
    ContactRouting,
    SharedModule,
    FormsModule
  ],
  exports: [ContactListComponent, ContactDetailComponent],
  providers: [ContactService]
})
export class ContactModule { }
