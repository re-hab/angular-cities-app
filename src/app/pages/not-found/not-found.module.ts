import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule} from './not-found-routing.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class NotFoundModule { }
