import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    rdoGender: ['F', Validators.required],
    chkNotifications: [false, Validators.required],
    chkConditions: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'M',
    notifications: true,
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      rdoGender: this.person.gender,
      chkNotifications: this.person.notifications,
      chkConditions: false,
    });

    // Suscribirnos a un solo campo
    /*
    this.myForm.get('chkConditions')?.valueChanges.subscribe((chk) => {
      console.log(chk);
    });
    */

    // Suscribirnos a cambios en el formulario
    this.myForm.valueChanges.subscribe(({ chkConditions, ...rest }) => {
      this.person = rest;
      console.log(this.person);
    });
  }

  save(): void {
    const formValue = { ...this.myForm.value };
    delete formValue.chkConditions;

    this.person = formValue;
    console.log(formValue);
  }
}
