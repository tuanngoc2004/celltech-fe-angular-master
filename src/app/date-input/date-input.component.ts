import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  template: `<nz-date-picker [(ngModel)]="innerValue" (input)="onInput($event)"></nz-date-picker>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
  ],
  styles: [`
    .custom-nz-date-picker {
      width: 100%;
      height: 50px;

    }
  `]
})
export class DateInputComponent implements ControlValueAccessor {
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
