export class Person {
    id?: number;
    name: string;
    isAlive:boolean;
    father?:string;
    mother?:string;
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