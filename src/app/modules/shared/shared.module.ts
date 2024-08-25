import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmConstrucaoComponent } from './em-construcao/em-construcao.component';
import { DetailsDetectEpiPlusComponent } from './details-detect-epi-plus/details-detect-epi-plus.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    EmConstrucaoComponent,
    DetailsDetectEpiPlusComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    EmConstrucaoComponent,
    DetailsDetectEpiPlusComponent
  ]
})
export class SharedModule { }
