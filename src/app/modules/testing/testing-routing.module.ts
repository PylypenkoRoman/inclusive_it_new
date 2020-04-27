import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './components/testing/testing.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'testing'
    }, children: [
      {
        path: '',
        component: TestingComponent,
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
export class TestingRoutingModule { }
