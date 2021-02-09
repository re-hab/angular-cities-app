import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ToastrModule.forRoot()
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
