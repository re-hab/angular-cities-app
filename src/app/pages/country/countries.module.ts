import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from './../../shared/shared.module';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { ListComponent } from './components/list/list.component';
import { DialogComponent } from './components/dialog/dialog.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CountriesComponent,
    ListComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CountriesRoutingModule,
    FormsModule
  ]
})
export class CountriesModule { }
