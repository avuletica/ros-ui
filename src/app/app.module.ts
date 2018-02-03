import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {RosService} from './services/RosService';
import {TopbarComponent} from './topbar/topbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BumpersComponent } from './bumpers/bumpers.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BumpersComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [RosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
