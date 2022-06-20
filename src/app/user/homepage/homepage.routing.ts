import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const homePageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },

    ]
  }
];
