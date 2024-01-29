import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-text',
  template: '<input [type]="inputType" nz-input [(ngModel)]="innerValue" (input)="onInput($event)">',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextComponent),
      multi: true,
    },
  ],
})
export class TextComponent implements ControlValueAccessor {
  @Input() formControl: any;
  @Input() inputType: string = 'text'; // Default type is 'text'
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
