import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonAddComponent } from './person-add/person-add.component';

const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: 'personAdd', component: PersonAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
