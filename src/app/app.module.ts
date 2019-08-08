import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { HttpClientModule }    from '@angular/common/http';
import { PersonAddComponent } from './person-add/person-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { SiblingCardComponent } from './sibling-card/sibling-card.component';
import { ChildrenCardComponent } from './child-card/child-card.component';
import { SpouseManageComponent } from './spouse-manage/spouse-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonAddComponent,
    PersonDetailComponent,
    SiblingCardComponent,
    ChildrenCardComponent,
    SpouseManageComponent
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
