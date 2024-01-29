import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DynamicService} from "@shared/services/dynamic.service";
import {InputControlModule} from "@core/input-controls/input-control.module";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    InputControlModule
  ],
  providers: [DynamicService]
})
export class SharedModule { }
