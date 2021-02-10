import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  exports: [
    MaterialModule,
    SideNavComponent
  ]
})
export class SharedModule { }
