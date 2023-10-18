import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients!: Array<Patient>
  currentPage:number=0;
  pageSize:number=5;
  totalPages:number=0;
  errorMessage!:string;
  searchFormGroup!: FormGroup;
  currentAction :string='all';
  
  constructor(private fb:FormBuilder,
    private patientService:PatientService,private router:Router,
    public authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword:this.fb.control(null)
    });
    //this.patients = this.patientService.getAllPatients()
    this.handleGetPagePatients()
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
      this.router.navigateByUrl('/admin/add-patient') //navigate(['/add-patient'])
  }

  handleEditPatient(id:string){
    this.router.navigateByUrl('/admin/edit-patient/'+id)
  }

  handleGetPagePatients(){
    this.patientService.getPagePatients(this.currentPage,this.pageSize).subscribe({
      next: (data)=>{
        this.patients = data.patients;
        this.totalPages=data.totalPages;
      },
      error:(err)=>{
         this.errorMessage= err;
      }
    });
  }

  handleSearchPatients(){
    this.currentAction='search';
    let keyword = this.searchFormGroup.value.keyword;
    this.patientService.searchPagePatients(keyword,this.currentPage,this.pageSize).subscribe({
      next:(data)=>{
        this.patients = data.patients;
        this.totalPages=data.totalPages;
      }
    });
  }

  goToPage(page:number){
    this.currentPage=page;
    if(this.currentAction==='all')
    this.handleGetPagePatients();
    else
    this.handleSearchPatients();
  }
}
