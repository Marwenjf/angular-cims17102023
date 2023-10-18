import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients!: Array<Patient>
  constructor(
    private patientService:PatientService,private router:Router
    ) { }

  ngOnInit(): void {
    this.patients = this.patientService.getAllPatients()
  }

  handleDelete(id:string){
    let conf = confirm('Are you sure?')
    if(conf== false) return;
    this.patientService.deletePatient(id)
  }

  handleActivate(id:string){
    this.patientService.activatePatient(id)
  }

  handleAddPatient(){
      this.router.navigateByUrl('/add-patient') //navigate(['/add-patient'])
  }
}
