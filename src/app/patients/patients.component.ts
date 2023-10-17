import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients!: Array<Patient>
  constructor(
    private patientService:PatientService
    ) { }

  ngOnInit(): void {
    this.patients = this.patientService.getAllPatients()
  }

  handleDelete(id:number){
    let conf = confirm('Are you sure?')
    if(conf== false) return;
    this.patientService.deletePatient(id)
  }

  handleActivate(id:number){
    this.patientService.activatePatient(id)
  }
}
