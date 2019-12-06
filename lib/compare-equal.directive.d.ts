import { ElementRef } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
export declare class CompareEqualDirective implements Validator {
    private el;
    aaCompareEqual: any;
    validate(control: AbstractControl): ValidationErrors;
    constructor(el: ElementRef);
}
