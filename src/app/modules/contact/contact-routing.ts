import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';



export const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact-detail/:id', component: ContactDetailComponent },
];

export const ContactRouting = RouterModule.forChild(routes);
