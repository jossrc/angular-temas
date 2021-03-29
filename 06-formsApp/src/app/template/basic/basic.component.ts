import { Component, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}

  save(myForm: NgForm): void {
    console.log(myForm.value);
  }
}
