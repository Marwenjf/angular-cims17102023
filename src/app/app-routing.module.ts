import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { PatientComponent } from './patient/patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'medicaments',component:MedicamentsComponent},
  {path:'patient',component:PatientComponent},
  {path:'add-patient',component:AddPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
