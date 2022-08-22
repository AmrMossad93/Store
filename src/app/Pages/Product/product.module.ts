import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import {WidgetsModule} from "../../Widgets/widgets.module";
import {PrimeNgModule} from "../../DesignModules/prime-ng/prime-ng.module";
import {AngularMaterialModule} from "../../DesignModules/angular-material/angular-material.module";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    WidgetsModule,
    PrimeNgModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class ProductModule { }
