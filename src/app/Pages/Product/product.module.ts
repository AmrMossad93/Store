import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import {WidgetsModule} from "../../Widgets/widgets.module";
import {PrimeNgModule} from "../../DesignModules/prime-ng/prime-ng.module";
import {AngularMaterialModule} from "../../DesignModules/angular-material/angular-material.module";


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    WidgetsModule,
    PrimeNgModule,
    AngularMaterialModule
  ]
})
export class ProductModule { }
