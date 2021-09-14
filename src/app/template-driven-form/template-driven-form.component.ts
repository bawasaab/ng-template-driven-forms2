import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  countries = [
    {
      country: 'India',
      state: 'Punjab'
    },
    {
      country: 'USA',
      state: 'New York'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit( frmObj: any ) {

    console.log('frmObj', frmObj);

    if( !frmObj.submitted ) {
      console.log('not submitted');
      return;
    }

    // if( frmObj.invalid ) {
    //   console.log('in_data.errors', frmObj.errors);  
    //   return;
    // }

    let in_data = frmObj.value;
    console.log('in_data', in_data);
  }
}
