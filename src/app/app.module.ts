import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

//User
import { MainModule as UserMainModule } from './user/main.module';


import { NZ_DATE_LOCALE, NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US, vi_VN } from 'ng-zorro-antd/i18n';
import { vi as vn } from 'date-fns/locale';

import { registerLocaleData } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import vi from '@angular/common/locales/vi';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    UserMainModule,

  ],
  providers: [
    { provide: NZ_I18N, useValue: localStorage.getItem('language') === 'vi' ? vi_VN : en_US },
    { provide: NZ_DATE_LOCALE, useValue: vn },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
