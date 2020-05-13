import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonViewComponent } from './components/person/person-view.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { SpouseManageComponent } from './components/spouse-manage/spouse-manage.component';

const routes: Routes = [
  { path: 'person', component: PersonViewComponent },
  { path: 'spouseManage', component: SpouseManageComponent },
  { path: 'personEdit/:id', component: PersonEditComponent },
  { path: 'personDetail/:id', component: PersonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
