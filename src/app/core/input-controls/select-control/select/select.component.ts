import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {isFunction} from 'lodash';


@Component({
  selector: 'celltech-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})

export class SelectComponent implements ControlValueAccessor {
  @Input()
  displayField!: string;
  @Input() selectedValue: any;
  @Input() defaultValue!: string;
  @Input() showAllText!: string;
  @Input() showAllTextDisabled!: boolean;
  @Input() valueField!: string;
  @Input() isDisabled!: any;
  @Input() values!: any[];
  @Input() mode!: string;
  @Output() selected = new EventEmitter();
  value: any;
  public touched!: () => void;

  // data: any ;

  // constructor(private dataService: DataService) {}

  // ngOnInit(): void {
  //   this.dataService.getData().subscribe((result) => {
  //     this.data = result;
  //   });
  // }


  public height = '250px';
  private onChange = (value: any) => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  onHandleChangeValue(value: any) {
    this.value = value;
    if (this.selectedValue) {
      this.selectedValue = value;
    }
    if (isFunction(this.onChange)) {
      this.onChange(this.value);
    }
    this.selected.emit(this.value);
  }

  
}
