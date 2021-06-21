import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit , ControlValueAccessor {
  @Input() label: string;
  @Input() type: 'text' | 'email' | 'password' = 'text';

  value: any = '';

  constructor(
    @Self()
    @Optional()
    public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    } 
    }
  

  ngOnInit() {}
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    // Store the provided function as an internal method.
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // Store the provided function as an internal method.
    this.onTouched = fn;
  }

  public onChange() {}
  public onTouched() {}
}