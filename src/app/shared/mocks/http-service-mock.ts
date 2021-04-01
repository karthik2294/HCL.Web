import { of } from "rxjs";
import { contactList } from "../../modules/contact/mock-data";

export class HttpServiceMock {
    public get() {
        return of(contactList)
    }
}