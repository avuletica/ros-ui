import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {BumpersComponent} from './components/bumpers/bumpers.component';
import {CamviewComponent} from './components/camview/camview.component';
import { PoseviewComponent } from './components/poseview/poseview.component';

import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';

import {RosService} from './services/RosService';
import { SpeedWidgetComponent } from './components/speed-widget/speed-widget.component';
import {RandomService} from './services/RandomService';
import { MovementIndicatorComponent } from './components/movement-indicator/movement-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BumpersComponent,
    CamviewComponent,
    PoseviewComponent,
    SpeedWidgetComponent,
    MovementIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [RosService, RandomService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
