import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../../../shared/contants';
import { Observable } from 'rxjs';
import { IContact } from '../models/contact';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient, private contants: AppConstants) { }

  /**
   * This method is used to retrive the list of contacts from API
   * @returns the list of contacts
   */
  public getContacts(): Observable<IContact[]> {
    return this.httpClient.get<IContact[]>(this.contants.Base_APi_Url + 'Contact');
  }

  /**
 * This method is used to retrive the contact information from API
 * @returns the contact details based on employeeId
 */
  public getContact(employeeId: number): Observable<IContact> {
    return this.httpClient.get<IContact>(this.contants.Base_APi_Url + 'Contact/' + employeeId);
  }
}
