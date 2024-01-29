import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-task2',
  templateUrl: './create-task2.component.html',
  styleUrls: ['./create-task2.component.scss']
})
export class CreateTask2Component implements OnInit {
  data: any;
  form: FormGroup;
  public Editor = ClassicEditor;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(config => {
      this.data = config;
    });
  }
  

  exampleForm = new FormGroup({
    editorContent: new FormControl(null) // Add this for TinyMCE
  });

  
  onSubmit() {
    console.log(this.form.value);
  }
}