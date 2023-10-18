import { Injectable } from '@angular/core';
import { PagePatient, Patient } from '../models/patient.model';
import { ValidationErrors } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { Observable, of } from 'rxjs';

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

    for (let index = 0; index < 10; index++) {
      this.patients.push({id:UUID.UUID(),name:'pat1'+index,age:75,active:true});
      this.patients.push({id:UUID.UUID(),name:'pat2'+index,age:45,active:false});
      this.patients.push({id:UUID.UUID(),name:'pat3'+index,age:34,active:true});
      this.patients.push({id:UUID.UUID(),name:'pat4'+index,age:21,active:false});
      this.patients.push({id:UUID.UUID(),name:'pat5'+index,age:90,active:true});
    }
  }

  getAllPatients(){
    return this.patients
  }

  getPagePatients(page:number,size:number):Observable<PagePatient>{
    let index = page*size;
    let totalPages = ~~(this.patients.length/size);
    if(this.patients.length % size != 0)
    totalPages++;
    let pagePatients =  this.patients.slice(index,index+size);
    return of({page:page,size:size,totalPages:totalPages,patients:pagePatients});
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

  getPatient(id:string){
    let patient = this.patients.find(p=>p.id==id)
    return patient 
  }

  editPatient(patient:Patient){
    this.patients=this.patients.map(p=>(p.id==patient.id)?patient:p)
  }

  searchPagePatients(keyword:string,page:number,size:number):Observable<PagePatient>{
    let result = this.patients.filter(p=>p.name.includes(keyword));
    let index = page*size;
    let totalPages = ~~(result.length/size);
    if(result.length % size != 0)
    totalPages++;
    let pagePatients =  result.slice(index,index+size);

    return of({page:page,size:size,totalPages:totalPages,patients:pagePatients});
  }
}
