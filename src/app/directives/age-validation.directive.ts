import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
@Directive({
  selector: '[appAgeValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AgeValidationDirective,
    multi: true
  }]
})
export class AgeValidationDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log('control value: ', control.value);
    if (control.value - 0 < 15){
      return { ageInvalid: true };
    }
    return null;
  }
}
