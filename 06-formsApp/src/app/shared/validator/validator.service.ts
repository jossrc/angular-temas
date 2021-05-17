import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
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

  constructor() { }

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
}
