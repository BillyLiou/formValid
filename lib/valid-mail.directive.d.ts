import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
export declare class ValidMailDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors;
    constructor();
}
