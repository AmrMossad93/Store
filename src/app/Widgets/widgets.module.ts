import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './Components/card/card.component';
import {AngularMaterialModule} from "../DesignModules/angular-material/angular-material.module";



@NgModule({
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent
    ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class WidgetsModule { }
