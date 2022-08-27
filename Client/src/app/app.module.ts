import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonViewComponent } from './components/person/person-view.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { SiblingCardComponent } from './components/sibling-card/sibling-card.component';
import { ChildrenCardComponent } from './components/child-card/child-card.component';
import { SpouseManageComponent } from './components/spouse-manage/spouse-manage.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FamilytreeViewComponent } from './components/familytree-view/familytree-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonViewComponent,
    PersonEditComponent,
    PersonDetailComponent,
    SiblingCardComponent,
    ChildrenCardComponent,
    SpouseManageComponent,
    SearchFilterPipe,
    FamilytreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
