import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  title = 'angular';
  
  public Editor = ClassicEditor;

  // data: any ;

  // constructor(private dataService: DataService) {}

  // ngOnInit(): void {
  //   this.dataService.getData().subscribe((result) => {
  //     this.data = result;
  //   });
  // }

  jsonData: any;
  captionIndex: number = 1;
  selectedCaption: any;

  constructor(private jsonReaderService: DataService) { }

  ngOnInit() {
    this.jsonReaderService.getData().subscribe(data => {
      this.jsonData = data;
      this.selectCaptionByIndex();
    });
  }

  selectCaptionByIndex() {
    let flatArray = this.jsonData.data.settingForm.settings.formLayout.flat();
    
    if (this.captionIndex >= 0 && this.captionIndex < flatArray.length) {
      this.selectedCaption = flatArray;
    } else {
      console.error("Index out of range");
    }
  }

  exampleForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    select: new FormControl(null, Validators.required),
    editorContent: new FormControl(null) // Add this for TinyMCE
  });

  onSubmit() {
    console.log(this.exampleForm.value);
  }
}
