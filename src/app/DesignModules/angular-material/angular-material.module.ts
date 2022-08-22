import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


const angularMaterialModule = [
  MatCardModule,
  MatButtonModule,
  MatIconModule
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
