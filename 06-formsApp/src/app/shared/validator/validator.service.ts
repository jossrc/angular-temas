import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  /**
   * Cadena que contiene una expresión regular para validar
   * la existencia de un nombre y apellido de manera obligatoria
   */
  public fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  /**
   * Cadena que contiene una expresión regular para validar
   * un correo electrónico
   */
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  /**
   * Valida la existencia de un usuario en la base de datos.
   * Si no existe, significa que no hay error y retornará `null`,
   * en caso contrario retornará un objeto indicando el error
   * con la existencia.
   */
  isValidUsername(control: FormControl): ValidationErrors | null {
    const value: string | null = control.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        isStrider: true,
      };
    }
    return null;
  }

  /**
   * Método que permite la comparación de dos campos de un
   * formulario. Se recomienda utilizarlo al final de todas
   * las validaciones.
   * @param field1 Primer campo a comparar
   * @param field2 Segundo campo a comparar
   * @returns Función que recibe como argumento un `AbstractControl`
   * para la detección de todos los campos en un formulario. Esta
   * función compara los valores y establece un `ValidationErrors`
   * cuando la comparación es distinta, en caso contrario retornará
   * `null`. Se debe tener cuidado ya que limpia todos los errores
   * cuando se cumple la condición.
   */
  compareFields(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const data1 = formGroup.get(field1)?.value;
      const data2 = formGroup.get(field2)?.value;

      const error = {
        notEqual: true,
      };

      if (data1 !== data2) {
        formGroup.get(field2)?.setErrors(error);
        return error;
      }

      // Limpia todos los errores (Cuidado)
      formGroup.get(field2)?.setErrors(null);
      return null;
    };
  }
}
