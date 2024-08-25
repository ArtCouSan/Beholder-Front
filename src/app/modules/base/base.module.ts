import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { SharedModule } from '../shared/shared.module';
import { BaseRoutingModule } from './base.routes';
import { HomeComponent } from './components/home/home.component';
import { DetectEpiPlusComponent } from './components/detect-epi-plus/detect-epi-plus.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    DetectEpiPlusComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class BaseModule { }
