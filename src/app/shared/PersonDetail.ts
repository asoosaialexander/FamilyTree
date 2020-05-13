import {Person} from '../shared/Person';

export class PersonDetail {
  id: number;
  name: string;
  isAlive:boolean;
  fatherId?:number;
  fatherName?:string;
  motherId?:number;
  motherName?:string;
  gender: string;
  birthYear?: number;
  occupation?:string;
  residence?:string;
  notes?:string;
  spouses?:Spouse[];
  siblings?:Sibling[];
}

export class Sibling{
  info:Person;
  relation:string;
}

export class Spouse{
  info:Person;
  children:Person[];
}
