import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NavComponent } from './nav/nav.component';
import { DemoMaterialModule } from '../material-module';
import { AppSharedModule } from '../app-shared.module';

@NgModule({
  declarations: [NavComponent],
  imports:
      [CommonModule,
      FormsModule,
      AppSharedModule,

    ],
  exports: [NavComponent],
  entryComponents: [],
})

export class NavModule { }