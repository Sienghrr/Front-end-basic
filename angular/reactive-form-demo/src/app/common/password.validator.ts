import { AbstractControl} from "@angular/forms";
export function passwordValidator(control:AbstractControl):{[key:string]:any}|null
{
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');
    // if(password=== null && confirmPassword === null){
    //     return null;
    // }
    if (confirmPassword?.pristine ) {
        return null;
    }
    if(password&& confirmPassword && password?.value !== confirmPassword?.value){

        return {"passwordMismatch":"password doesn't match"};
    }
    return null;
    
        
}

