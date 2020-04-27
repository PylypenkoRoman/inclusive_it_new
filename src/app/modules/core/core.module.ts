import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
