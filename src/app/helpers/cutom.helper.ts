import { Injectable } from '@angular/core';
import { ValidationErrors, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidationErrorMessage {

    public getErrorMessage(fieldName: string,errors: ValidationErrors):string{
        if (errors['required']) {
         return fieldName+' is Required'
        } else if (errors['minlength']) {
         return fieldName+' should have at least '+errors['minlength']['requiredLength']+' Characters'
        }
        else if (errors['min']) {
         return fieldName+' should have min value '+errors['min']['min']
        }
        else return '';
       }
    
}