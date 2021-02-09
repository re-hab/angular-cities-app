import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


const materials: any[]=[
  MatCardModule, 
  MatInputModule,
  MatButtonModule
]


@NgModule({
  declarations: [],
  imports: [
    materials
  ],
  exports: [
    materials
  ]
})
export class MaterialModule { }
