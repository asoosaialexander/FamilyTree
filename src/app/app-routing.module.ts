import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { SpouseManageComponent } from './spouse-manage/spouse-manage.component';

const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: 'spouseManage', component: SpouseManageComponent },
  { path: 'personAdd', component: PersonAddComponent },
  { path: 'personDetail', component: PersonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
