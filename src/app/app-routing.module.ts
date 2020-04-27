import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/core/components/home/home.component';
import { AboutUsComponent } from './modules/core/components/about-us/about-us.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'study',
    loadChildren: './modules/study/study.module#StudyModule',
  },
  {
    path: 'testing',
    loadChildren: './modules/testing/testing.module#TestingModule',
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
