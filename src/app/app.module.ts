import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { PatientComponent } from './patient/patient.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    CommentDetailComponent,
    MedicamentsComponent,
    PatientComponent,
    NavBarComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
