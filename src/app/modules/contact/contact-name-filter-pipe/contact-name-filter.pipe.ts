import { Pipe, Injectable, PipeTransform } from "@angular/core";
import { IContact } from "../models/contact";


@Pipe({
    name: 'contactFilter',
})
@Injectable()
export class ContactNameFilterPipe implements PipeTransform {
    transform(items: Array<IContact>, filter: string): Array<IContact> {
        let filterData = [];
        if (filter) {
            filterData = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
        } else {
            filterData = items;
        }
        return filterData;
    }
}

