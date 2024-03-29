import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
    `
      pre {
        background: #fafafa;
        border: 1px solid #fefefe;
        padding: 5px;
      }
    `,
  ],
})
export class BasicComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product : '',
    price : 10,
    stock : 10
  }

  constructor() {}

  ngOnInit(): void {}

  validateName(): boolean {
    return (
      this.myForm?.controls.txtProduct?.invalid &&
      this.myForm?.controls.txtProduct?.touched
    );
  }

  validatePrice(): boolean {
    const txtPrice = this.myForm?.controls.txtPrice;

    return txtPrice?.touched && txtPrice?.value < 0;
  }

  save(): void {
    if (this.myForm.controls.txtPrice.value < 0) {
      console.log('No posteado');
      return;
    }

    this.myForm.resetForm({
      txtProduct: '',
      txtPrice: 0,
      txtStock: 0
    });
  }
}
