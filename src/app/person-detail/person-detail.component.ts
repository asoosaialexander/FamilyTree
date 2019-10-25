import { Component, OnInit } from '@angular/core';
import { Person, Sibling, Spouse } from '../shared/Person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person:Person;
  // {
  //   id:1,
  //   name:"Soosai Alexander",
  //   father:"Antony Maria Chelestin",
  //   mother:"Rajesh Mary",
  //   gender:"Male",
  //   birthYear:1988,
  //   occupation:"Software Engineer",
  //   isAlive:true,
  //   residence:"Chennai",
  //   spouses: [
  //     {
  //       info: { id: 1, name: "Antony Divya Jose", birthYear: 1991, isAlive: true, gender: "Female" },
  //       children: [
  //         { id: 1, name: "Brandon Alexander", isAlive: true, birthYear: 2018, gender: "Male" }
  //       ]
  //     },
  //   ],
  //   siblings: [
  //     {
  //       info: { id: 1, name: "Prince Alexander", birthYear: 1992, isAlive: true, gender: "Male" },
  //       relation: "Younger Brother"
  //     },
  //     {
  //       info: { id: 2, name: "Prem Alexander", birthYear: 1994, isAlive: true, gender: "Male" },
  //       relation: "Younger Brother"
  //     },
  //   ]
  // }

  constructor() { }

  ngOnInit() {
  }

}