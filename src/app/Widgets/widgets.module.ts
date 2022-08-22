import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './ReUsable-Component/card/card.component';
import {AngularMaterialModule} from "../DesignModules/angular-material/angular-material.module";
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';



@NgModule({
    declarations: [
        CardComponent,
        NavBarComponent
    ],
  exports: [
    CardComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class WidgetsModule { }
