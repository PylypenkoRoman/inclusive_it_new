import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { StudyModule } from './modules/study/study.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StudyModule,
  ],
  providers: [],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
