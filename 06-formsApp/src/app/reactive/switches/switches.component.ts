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
    //chkConditions: [false, Validators.required],
    chkConditions: [false, Validators.requiredTrue]
  });

  person = {
    gender: 'M',
    notifications: true,
  };

  constructor(private formBuilder: FormBuilder) {}

  // Debemos tener cuidado ya que cuando no se establece será null e inválido
  ngOnInit(): void {
    this.myForm.reset({
      rdoGender: this.person.gender,
      chkNotifications: this.person.notifications,
      chkConditions: false,
    });
  }
}
