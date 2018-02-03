import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {BumpersComponent} from './components/bumpers/bumpers.component';
import {CamviewComponent} from './components/camview/camview.component';

import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';

import {RosService} from './services/RosService';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BumpersComponent,
    CamviewComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [RosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
