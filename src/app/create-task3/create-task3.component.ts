import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';



@Component({
  selector: 'app-create-task3',
  templateUrl: './create-task3.component.html',
  styleUrls: ['./create-task3.component.scss']
})
export class CreateTask3Component implements OnInit {
  data: any;
  form: FormGroup;
  apiKey = 'xhxn0tnvyhv821twpw3vijjai12pfr73b6lo5prhi9m7swd0'
  
  // fileList: any[] = [];

  // beforeUpload = (file: any): boolean => {
  //   this.fileList = this.fileList.concat(file);
  //   return false;
  // };

  fileList: any[] = [];
  uploadURL = 'your_upload_endpoint'; // Replace with your actual upload endpoint

  // beforeUpload = (file: any): boolean => {
  //   this.fileList = this.fileList.concat(file);
  //   return false;
  // };
  
  beforeUpload = (file: any): boolean => {
    this.fileList = [file]; // Set the file list to an array containing only the current file
    return false;
  };
  constructor(private dataService: DataService, private formBuilder: FormBuilder, private i18n: NzI18nService) {
    i18n.setLocale(en_US);
    
    // this.form = this.formBuilder.group({});
    this.form = this.formBuilder.group({
      name: [''],
      number: [''],
      date: [''], // Add more form controls as needed
      drop: [''],
      file: [''],
      area: [''],
      tree_drop: [''],
      // estimatedTime: [''],
      // ... other form controls ...
    });
    
  }


  ngOnInit(): void {  
    this.dataService.getData().subscribe(config => {
      this.data = config;

      // Duyệt qua settingFieldComponents để thêm các FormControl vào FormGroup
      if (this.data.data.settingFieldComponents) {
        this.data.data.settingFieldComponents.forEach((field:any) => {
          // Tạo một FormControl cho mỗi trường
          const control = new FormControl();
          this.form.addControl(field.code, control);
        });
      }
    });
  }
  

  performAction(action: any): void {
    // Xử lý logic dựa trên action
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Form Data:', formData);
  
      // Now, you can use formData to perform your 'CREATE' action
      // Call your service or perform necessary actions here
    } else {
      // Handle form validation errors if needed
    }
    // Thêm logic để thực hiện các bước cụ thể trong action.steps
  }
  
 // Inside your component class
 performCreateAction(action: any): void {
  if (this.form.valid) {
    const formData = this.form.value;
    console.log('Form Data:', formData);

    switch (action.component) {
      case 'CREATE':
        // Perform your 'CREATE' action using the form data
        break;
      case 'UPDATE':
        // Perform your 'UPDATE' action using the form data
        break;
      // Add more cases for other action components as needed
    }
  } else {
    // Handle form validation errors if needed
  }

  // Perform specific steps in action.steps if necessary
}

  // Hàm để xác định loại FormControl dựa trên formElementType
  getFormControlType(column: any): string {
    const fieldComponent = this.data.data.settingFieldComponents.find((field:any) => field.component === column.component);
    return fieldComponent ? fieldComponent.settings.form.formElementType : 'TEXT';
  }

  getFormData(): any {
    const formData: { [key: string]: any } = {};
  
    // Duyệt qua settingFieldComponents để lấy dữ liệu từ các FormControl
    if (this.data.data.settingFieldComponents) {
      this.data.data.settingFieldComponents.forEach((field: any) => {
        const controlValue = this.form.get(field.code)?.value;
        formData[field.code] = controlValue;
      });
    }
  
    return formData;
  }

  

  getDropdownOptions(column: any): any[] {
    const fieldComponent = this.data.data.settingFieldComponents.find((field:any) => field.component === column.component);
    return fieldComponent ? fieldComponent.settings.form.view.actions[0].valueField : [];
  }
}
