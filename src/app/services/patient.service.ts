import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { ValidationErrors } from '@angular/forms';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients!: Array<Patient>

  constructor() { 
    this.patients = [
      {id:UUID.UUID(),name:'pat1',age:75,active:true},
      {id:UUID.UUID(),name:'pat2',age:45,active:false},
      {id:UUID.UUID(),name:'pat3',age:34,active:true},
      {id:UUID.UUID(),name:'pat4',age:21,active:false},
      {id:UUID.UUID(),name:'pat5',age:90,active:true}
    ]
  }

  getAllPatients(){
    return this.patients
  }

  deletePatient(id:string){
    let patient = this.patients.find(p=>p.id==id)
    if (patient) {
    let index = this.patients.indexOf(patient)
    this.patients.splice(index,1)
    }
  }

  activatePatient(id:string){
    let patient = this.patients.find(p=>p.id==id)
    if (patient) {
      patient.active=!patient.active
    }
  }

  addPatient(p:Patient){
    p.id = UUID.UUID()
     this.patients.push(p);
  }

  getErrorMessage(fieldName: string,errors:ValidationErrors):string{
    if (errors['required']) {
     return fieldName+' is Required';
    } else if (errors['minlength']) {
     return fieldName+' should have at least '+errors['minlength']['requiredLength']+' Characters';
    }
    else if (errors['min']) {
     return fieldName+' should have min value '+errors['min']['min'];
    }
    else return '';
   }
}
