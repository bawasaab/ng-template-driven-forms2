import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class PasswordMatchValidator {
    static passwordsShouldMatch( controls: AbstractControl ) : Promise<ValidationErrors | null> {

        return new Promise( (resolve, reject) => {
            
            let data = controls?.parent?.value;
            let newPassword = data.newPassword;
            let confirmPassword = controls.value;
    
            if( newPassword !== confirmPassword ) {
                resolve({ passwordsShouldMatch: true });
            } else {
                resolve(null);
            }
        } );
    }
}