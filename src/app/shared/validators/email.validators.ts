import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmailValidator {
  static validateFormat(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;

    if (!value) {
      return null;
    }

    let isValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value);

    const errorToReturn = {
      invalidEmailFormat: {
        inputValue: control.value,
      },
    };

    return isValid ? null : errorToReturn;
  }
}