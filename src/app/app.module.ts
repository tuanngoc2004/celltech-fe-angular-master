import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AntModule} from "@core/modules/ant-design/ant.module";
import {InputControlModule} from "@core/input-controls/input-control.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CreateTask2Component } from './create-task2/create-task2.component';
import { CreateTask3Component } from './create-task3/create-task3.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NumberInputComponent } from './number-input/number-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { TextComponent } from './text/text.component';
import { DynamicService } from '@shared/services/dynamic.service';
// import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateTaskComponent,
    CreateTask2Component,
    CreateTask3Component,
    NumberInputComponent,
    DateInputComponent,
    TextComponent,
    
  ],
  imports: [
    AntModule,
    BrowserModule,
    AppRoutingModule,
    InputControlModule,
    BrowserAnimationsModule,
    CKEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    EditorModule,
    NzAutocompleteModule,
    NzUploadModule,
    NzIconModule,
  
  ],
  providers: [DynamicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
