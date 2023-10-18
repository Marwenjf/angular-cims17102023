export interface Patient {
    id:string
    name: string
    age:number,
    active:boolean    
}

export interface PagePatient{
    patients:Patient[];
    page:number;
    size:number;
    totalPages:number;
  }
