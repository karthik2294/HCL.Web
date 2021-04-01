import { Observable, of } from 'rxjs';
import { IContact } from '../models/contact';
import { contactList } from '../mock-data';

export class ContactMockService {

    /**
     * This method is used to retrive the list of contacts from API
     * @returns the list of contacts
     */
    public getContacts(): Observable<IContact[]> {
        return of(contactList)
    }

    /**
   * This method is used to retrive the contact information from API
   * @returns the contact details based on employeeId
   */
    public getContact(employeeId: number): Observable<IContact> {
        return of(contactList.find((item) => item.employeeId === 1));
    }

}
