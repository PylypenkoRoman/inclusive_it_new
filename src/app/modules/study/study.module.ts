import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyRoutingModule } from './study-routing.module';
import { StudyComponent } from './components/study/study.component';
import { SharedModule } from '../shared/shared.module';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  imports: [
    CommonModule,
    StudyRoutingModule,
    SharedModule
  ],
  declarations: [StudyComponent, CourseComponent]
})
export class StudyModule { }
