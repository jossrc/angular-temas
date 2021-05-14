import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
  styles: [],
})
export class DinamicComponent {

  myForm: FormGroup = this.formBuilder.group({
    txtPersonName: ['', [Validators.required, Validators.minLength(3)]],
    txtFavoriteGames: this.formBuilder.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      Validators.required
    ),
  });

  newFavorite: FormControl = this.formBuilder.control('', Validators.required);

  get favoriteGames(): FormArray {
    return this.myForm.get('txtFavoriteGames') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  addNewFavoriteGame(): void {
    if (this.newFavorite.invalid) {
      return;
    }

    this.favoriteGames.push(
      this.formBuilder.control(this.newFavorite.value, Validators.required)
    );

    this.newFavorite.reset();
  }

  removeFavoriteGame(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  save(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
