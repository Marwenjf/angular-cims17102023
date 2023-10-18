import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patientFormGroup! :FormGroup
  submitted = false
  constructor(private router:Router,private fb:FormBuilder,public patienService: PatientService) { }

  ngOnInit(): void {
    this.patientFormGroup = this.fb.group({
      name: this.fb.control(null,[Validators.required,Validators.minLength(6)]),
      age : this.fb.control(null,[Validators.required,Validators.min(12)]),
      active : this.fb.control(false,[Validators.required])
    })
  }
  
  
  addPatient(){
    this.submitted=true
    if (this.patientFormGroup.invalid) {
      return;
    }
    console.log(this.patientFormGroup.value)
    this.patienService.addPatient(this.patientFormGroup.value)
    this.router.navigateByUrl('/patients')
  }
  

}
