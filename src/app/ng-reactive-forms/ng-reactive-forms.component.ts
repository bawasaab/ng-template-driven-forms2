import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordMatchValidator } from "./passwordMatch.validator";

@Component({
  selector: 'app-ng-reactive-forms',
  templateUrl: './ng-reactive-forms.component.html',
  styleUrls: ['./ng-reactive-forms.component.css']
})
export class NgReactiveFormsComponent implements OnInit {

  form: FormGroup;
  isSubmitted = false;
  
  constructor(
    formbuilder: FormBuilder
  ) {

    this.form = formbuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: [
        '', 
        Validators.required,
        PasswordMatchValidator.passwordsShouldMatch
      ],
      confirmPassword: [
        '', 
        Validators.required,
        PasswordMatchValidator.passwordsShouldMatch
      ]
    }
    )
  }

  // convenience getter for easy access to form fields
	get f() { return this.form.controls; }

  // convenience getter for easy access to form values
  get frmValues() { return this.form.value; }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.isSubmitted = true;
    console.log('this.frmValues', this.frmValues);
    console.log( 'this.f', this.f );
  }

}
