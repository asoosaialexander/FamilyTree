export class Person {
    id?: number;
    name: string;
    gender: Gender;
    birthYear?: number;
    occupation?:string;
    notes?:string;

    // get birthYear(): number {
    //     return this.birthYear;
    // }

    // set birthYear(year:number){
    //     if(year>1900 && year<= new Date().getFullYear()){
    //         this.birthYear==year;
    //     }
    //     else{
    //         console.log("Error: Invalid Birth Year!")
    //     }
    // }
}

export enum Gender {
    "Male", "Female"
}