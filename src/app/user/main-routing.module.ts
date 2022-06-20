import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layouts/user/main-layout/main-layout.component';

const routers: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomePageModule),
      },

    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
