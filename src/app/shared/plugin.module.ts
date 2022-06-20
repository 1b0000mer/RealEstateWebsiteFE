import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { UserOutline, LockOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

// Zorro
const ngZorroAntdModules = [
  NzGridModule,
  NzLayoutModule,
  NzButtonModule,
  NzModalModule,
  NzDropDownModule,
  NzDatePickerModule,
  NzInputModule,
  NzSelectModule,
  NzPopoverModule,
  NzTableModule,
  NzTagModule,
  NzToolTipModule,
  NzCheckboxModule,
  NzEmptyModule,
  NzCarouselModule,
  NzFormModule,
  NzDividerModule,
  NzTabsModule,
  NzInputNumberModule,
  NzRadioModule,
  NzCardModule,
  NzPopconfirmModule,
];

const icons: IconDefinition[] = [
  LockOutline,
  UserOutline,

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ngZorroAntdModules,
    NzIconModule.forRoot(icons),
  ],
  exports:[
    ngZorroAntdModules,
  ]
})
export class PluginModule { }
