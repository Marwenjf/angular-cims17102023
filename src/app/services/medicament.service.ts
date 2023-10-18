import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MedicamentRequest } from '../models/medicament.model';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  apiUrl= environment.apiUrl 
  constructor(private http:HttpClient) { }

  getAllMedicaments():Observable<any>{
    return this.http.get(this.apiUrl+'/medicaments/list')
  }

  addMedicament(m:MedicamentRequest){
    return this.http.post(this.apiUrl+'/medicaments/add-med',m)
  }
}
