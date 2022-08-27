import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FamilytreeService } from 'src/app/services/familytree.service';
import { FamilyTree } from 'src/app/shared/FamilyTree';
import LoadChart from '../../shared/LoadChart.js';
import { Person } from 'src/app/shared/Person.js';
import { environment } from 'src/environments/environment.js';
import { Sibling } from 'src/app/shared/Sibling.js';
import { Spouse } from 'src/app/shared/Spouse.js';

@Component({
  selector: 'app-familytree-view',
  templateUrl: './familytree-view.component.html',
  styleUrls: ['./familytree-view.component.css']
})
export class FamilytreeViewComponent implements OnInit {

  familyTree: FamilyTree;
  defaultImgPath = '/assets/default.png';
  data = [];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private familytreeService: FamilytreeService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.familytreeService.getFamilyTree(id).subscribe(tree => {
      this.familyTree = tree;

      this.AddPersonNode(this.familyTree.person, this.familyTree.spouses);

      if (this.familyTree.mother || this.familyTree.father) {
        this.AddParentNode(this.familyTree.mother, this.familyTree.father);
      }

      if (this.familyTree.siblings) {
        this.familyTree.siblings.forEach(sibling => {
          this.AddSibling(sibling);
        });
      }

      if (this.familyTree.spouses && this.familyTree.spouses[0].children) {
        this.familyTree.spouses[0].children.forEach(child => {
          this.AddChild(child);
        });
      }
    });


    LoadChart(this.data);
  }
  AddPersonNode(person: Person, spouses: Spouse[]) {
    let node = '';
    if (this.familyTree.mother || this.familyTree.father) {
      node = '1';
    }
    if (spouses) {
      this.data.push([{
        v: '2', f: `<div class=\"row\"><div class=\"col-6\">
        <img src=\"${person.photo ? this.getImage(person.photo) : this.defaultImgPath}\" width=\"110px\" height=\"110px\"/>
        <p><b>${person.name}</b></p></div><div class=\"col-6\">
        <img src=\"${spouses[0].info.photo ? this.getImage(spouses[0].info.photo) :
          this.defaultImgPath}\" width=\"110px\" height=\"110px\"/>
        <p><b><a href="/tree/${spouses[0].info.id}">${spouses[0].info.name}</a></b></p>
        <p style=\"color:black; font-style:italic\">Spouse</p></div></div>`
      },
        node, '']);
    } else {
      this.data.push([{
        v: '2', f: `<img src=\"${person.photo ? this.getImage(person.photo) : this.defaultImgPath}\" width=\"110px\" height=\"110px\"/>
        <p><b>${person.name}</b>`
      },
        node, '']);
    }
  }

  AddParentNode(mother: Person, father: Person) {
    this.data.push([{
      v: '1', f: `<div class=\"row\"><div class=\"col-6\">
      <img src=\"${father.photo ? this.getImage(father.photo) : this.defaultImgPath}\" width=\"110px\" height=\"110px\"/>
      <p><b>${father ? '<a href=\"/tree/' + father.id + '\">'
          + father.name + '</a>' : ''}</b></p><p style=\"color:black; font-style:italic\">Father</p></div><div class=\"col-6\">
      <img src=\"${mother.photo ? this.getImage(mother.photo) : this.defaultImgPath}\" width=\"110px\" height=\"110px\"/>
      <p><b>${mother ? '<a href=\"/tree/' + mother.id + '\">'
          + mother.name + '</a>' : ''}</b></p><p style=\"color:black; font-style:italic\">Mother</p></div></div>`
    },
      '', '']);
  }

  AddSibling(sibling: Sibling) {
    this.data.push([`<img src=\"${sibling.info.photo ? this.getImage(sibling.info.photo) :
      this.defaultImgPath}\" width=\"110px\" height=\"110px\"/>
    <p><b><a href="/tree/${sibling.info.id}">${sibling.info.name}
    </a></b></p><p style=\"color:black; font-style:italic\">${sibling.relation}</p>`, '1', '']);
  }

  AddChild(child: Person) {
    this.data.push([`<img src=\"${child.photo ? this.getImage(child.photo) :
      this.defaultImgPath}\" width=\"110px\" height=\"110px\"/>
    <p><b><a href="/tree/${child.id}">${child.name}</a></b></p><p style=\"color:black; font-style:italic\">
    ${child.gender === 'Male' ? 'Son' : 'Daughter'}</p>`, '2', '']);
  }

  getImage(fileName: string) {
    return environment.resourceUrl + '/images/' + fileName;
  }

}
