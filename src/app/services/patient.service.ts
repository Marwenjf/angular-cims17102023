import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients!: Array<Patient>

  constructor() { 
    this.patients = [
      {id:1,name:'pat1',age:75,active:true},
      {id:2,name:'pat2',age:45,active:false},
      {id:3,name:'pat3',age:34,active:true},
      {id:4,name:'pat4',age:21,active:false},
      {id:5,name:'pat5',age:90,active:true}
    ]
  }

  getAllPatients(){
    return this.patients
  }

  deletePatient(id:number){
    let patient = this.patients.find(p=>p.id==id)
    if (patient) {
    let index = this.patients.indexOf(patient)
    this.patients.splice(index,1)
    }
  }

  activatePatient(id:number){
    let patient = this.patients.find(p=>p.id==id)
    if (patient) {
      patient.active=!patient.active
    }
  }
}
