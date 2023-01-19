import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PprNotificationModule } from '@paper-fe/notification';

@NgModule({
  imports: [BrowserModule, PprNotificationModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
