import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../shared/Person';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(persons: Person[], filter: string): any {
    console.log(persons);
    if (!persons || !filter) {
      return persons;
    }
    return persons.filter(person => person.name.toLowerCase().indexOf(filter) !== -1);
  }

}
