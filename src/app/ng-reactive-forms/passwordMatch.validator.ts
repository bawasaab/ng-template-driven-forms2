import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class PasswordMatchValidator {
    static passwordsShouldMatch( controls: AbstractControl ) : Promise<ValidationErrors | null> {

        return new Promise( (resolve, reject) => {

            let newPassword = controls.get('newPassword');
            let confirmPassword = controls.get('confirmPassword');
    
    
            console.log('passwordsShouldMatch newPassword', newPassword?.value);
            console.log('passwordsShouldMatch confirmPassword', confirmPassword?.value);
    
            if( newPassword !== confirmPassword ) {
                resolve({ passwordsShouldMatch: true });
            } else {
                resolve(null);
            }
        } );
    }
}