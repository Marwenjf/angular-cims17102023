import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  editPatientFormGroup! : FormGroup 
  constructor(private fb:FormBuilder,private router:Router,private patientService:PatientService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    let patient = this.patientService.getPatient(id)
    if (patient) {
      this.editPatientFormGroup = this.fb.group({
        id: this.fb.control(patient.id),
        name: this.fb.control(patient.name),
        age: this.fb.control(patient.age),
        active: this.fb.control(patient.active)
      })
    }
  }

  editPatient(){
   this.patientService.editPatient(this.editPatientFormGroup.value)
   this.router.navigateByUrl('/admin/patients')
  }
}
