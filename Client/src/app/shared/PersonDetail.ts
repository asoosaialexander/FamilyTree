import { Sibling } from './Sibling';
import { Spouse } from './Spouse';

export class PersonDetail {
  id: number;
  name: string;
  isAlive: string;
  fatherId?: number;
  fatherName?: string;
  motherId?: number;
  motherName?: string;
  gender: string;
  birthYear?: number;
  occupation?: string;
  residence?: string;
  photo?: string;
  spouses?: Spouse[];
  siblings?: Sibling[];
  maritalStatus?: string;
}
