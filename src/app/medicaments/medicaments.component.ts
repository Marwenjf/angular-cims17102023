import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';
import { MedicamentRequest } from '../models/medicament.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {
  medicaments!: Array<any>
  errorMessage!:string
  constructor(private router:Router,private medicamentService:MedicamentService) { }

  ngOnInit(): void {
    this.medicamentService.getAllMedicaments()
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.medicaments=data
      },
      error:(err)=>{
        console.log(err.message)
        this.errorMessage=err.message
      }
    })
  }

  handleAddMedicament(){
    this.router.navigateByUrl('/admin/add-medicament')
  }

  handleDelete(m:any){

  }

}
