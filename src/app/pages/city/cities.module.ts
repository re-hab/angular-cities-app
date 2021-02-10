import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities.component';
import { SharedModule} from './../../shared/shared.module';
import { FormsModule} from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CitiesRoutingModule } from './cities-routing.module'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CitiesComponent, ListComponent, DialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CitiesRoutingModule,
    RouterModule
  ]
})
export class CitiesModule { }
