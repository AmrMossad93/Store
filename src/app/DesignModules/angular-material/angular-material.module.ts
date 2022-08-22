import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";


const angularMaterialModule = [
  MatCardModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    angularMaterialModule
  ],
  exports: [
    angularMaterialModule
  ]
})
export class AngularMaterialModule {
}
