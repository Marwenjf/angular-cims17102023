import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'admin',component:AdminTemplateComponent, canActivate: [AuthenticationGuard],
   children:[
    {path:'patients',component:PatientsComponent},
    {path:'medicaments',component:MedicamentsComponent},
    {path:'add-medicament',component:AddMedicamentComponent},
    {path:'add-patient',component:AddPatientComponent},
    {path:'edit-patient/:id',component:EditPatientComponent},
   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
