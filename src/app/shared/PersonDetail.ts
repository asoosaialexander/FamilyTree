import {Person} from '../shared/Person';

export class PersonDetail {
  id: number;
  name: string;
  isAlive:string;
  fatherId?:number;
  fatherName?:string;
  motherId?:number;
  motherName?:string;
  gender: string;
  birthYear?: number;
  occupation?:string;
  residence?:string;
  photo?:string;
  spouses?:Spouse[];
  siblings?:Sibling[];
  maritalStatus?:string;
}

export class Sibling{
  info:Person;
  relation:string;
}

export class Spouse{
  info:Person;
  children:Person[];
}
