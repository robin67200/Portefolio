import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { DemoMaterialModule } from './material-module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';




const APP_COMPONENTS = [
    
   ];

const APP_MODULES = [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    DemoMaterialModule,
    AngularFontAwesomeModule,

];

@NgModule({
  declarations: [ APP_COMPONENTS ],
  imports: [ APP_MODULES ],
  providers: [
  ],
  entryComponents: [],
  exports: [ APP_MODULES,  ]
})
export class AppSharedModule {}
