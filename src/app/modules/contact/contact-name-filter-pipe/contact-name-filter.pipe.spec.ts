import { contactList } from "../mock-data";
import { ContactNameFilterPipe } from "./contact-name-filter.pipe";

describe('ContactNameFilterPipe', () => {
    const pipe = new ContactNameFilterPipe();

    it('should filter based on passed filter on call of transform', () => {
        const contacts = contactList.filter((item) => item.name.includes('karthi'));
        expect(pipe.transform(contactList, 'karthi')).toEqual(contacts);
    });

    it('should return add the records if filter is falsy', () => {
        expect(pipe.transform(contactList, '')).toEqual(contactList);
    });
});
