import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyComponent } from './components/study/study.component';
import { CourseComponent } from './components/course/course.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: false,
    }, children: [
      {
        path: '',
        component: StudyComponent,
        data: {
          breadcrumb: false
        }
      },
      { path: ':id',
      component: CourseComponent,
      data: {
        breadcrumb: false
      }
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyRoutingModule { }
