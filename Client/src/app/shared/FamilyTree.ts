import { Person } from './Person';
import { Sibling } from './Sibling';
import { Spouse } from './Spouse';

export class FamilyTree {
  person: Person;
  father?: Person;
  mother?: Person;
  spouses?: Spouse[];
  siblings?: Sibling[];
}
