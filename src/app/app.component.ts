import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //Button Component
  label = "Submit"

  functioncall(event: any) {
    console.log('functioncall', event);
  }
  //Radio Component
  controlsFormGroup: FormGroup;
  radioexample: FormControl= new FormControl;
  constructor(private fb: FormBuilder){}
  ngOnInit(){
    this.controlsFormGroup=this.fb.group({
      radioexample: this.radioexample
    })
    this.controlsFormGroup.get('radioexample').valueChanges.subscribe(value => console.log(value));
    this.customInputForm = this.fb.group(
      {
        
        //fullname: ['Bill Gates']  
      },
      
    );
  }
  save(): void{
    let radioValue = this.controlsFormGroup.get('radioexample').value;
    console.log(radioValue)
  }

  //TextInputComponent
  customInputForm: FormGroup;

}
