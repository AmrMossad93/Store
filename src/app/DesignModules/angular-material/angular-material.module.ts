import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';


const angularMaterialModule = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
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
