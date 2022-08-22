import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './ReUsable-Component/card/card.component';
import {AngularMaterialModule} from "../DesignModules/angular-material/angular-material.module";
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AddEditProductComponent } from './Dialogues/Product/add-edit-product/add-edit-product.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        CardComponent,
        NavBarComponent,
        AddEditProductComponent
    ],
  exports: [
    CardComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class WidgetsModule { }
