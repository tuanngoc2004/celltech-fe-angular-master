import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AntModule} from "@core/modules/ant-design/ant.module";
import {SortAlphabetPipe} from "src/app/core/input-controls/pipes";
import {FormsModule} from "@angular/forms";
import {SelectComponent} from "@core/input-controls/select-control";

@NgModule({
  declarations: [
    SortAlphabetPipe,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AntModule,
    FormsModule
  ],
  exports: [
    SortAlphabetPipe,
    SelectComponent
  ]
})
export class InputControlModule {
}
