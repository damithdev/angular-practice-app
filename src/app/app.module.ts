import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Ass1Component } from './ass1/ass1.component';
import { WarningComponent } from './ass1/warning/warning.component';
import { SuccessComponent } from './ass1/success/success.component';
import { MainComponent } from './main/main.component';
import { ServerComponent } from './main/server/server.component';
import { ServersComponent } from './main/servers/servers.component';
import { Ass2Component } from './ass2/ass2.component';
import { Ass3Component } from './ass3/ass3.component';

@NgModule({
  declarations: [
    AppComponent,
    Ass1Component,
    WarningComponent,
    SuccessComponent,
    MainComponent,
    ServerComponent,
    ServersComponent,
    Ass2Component,
    Ass3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
