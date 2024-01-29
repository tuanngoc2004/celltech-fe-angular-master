import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  template: '<input type="number" nz-input [(ngModel)]="innerValue" (input)="onInput($event)" >',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    },
  ],
})
export class NumberInputComponent implements ControlValueAccessor {
  @Input() formControl: any;
  innerValue: any;

  onInput(event: any): void {
    this.innerValue = event.target.value;
    this.onChange(this.innerValue);
  }

  private onChange: (value: any) => void = () => {};

  writeValue(value: string): void {
    this.innerValue = value;
    this.onChange(this.innerValue);
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}
}
