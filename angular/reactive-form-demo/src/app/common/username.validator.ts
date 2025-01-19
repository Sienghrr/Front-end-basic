import { AbstractControl, ValidatorFn } from "@angular/forms";

//  export function usernameValidator(control:AbstractControl):{[key:string]:any}|null{
//     // validate have two return 
//     // if invalid return object
//     // if valid return null
//   let result = /admin/.test(control.value);
//   if(result){
//     return {"forbiddenName": control.value};
//   }
//     return null;
// } // not flexible
export function usernameValidator(pattern:RegExp):ValidatorFn{
    return (control:AbstractControl):{[key:string]:any}|null=>{
        let result = pattern.test(control.value);
        if(result){
            return {"forbiddenName": control.value};
        }
        return null;
    }

}