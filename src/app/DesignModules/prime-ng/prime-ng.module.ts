import {NgModule} from '@angular/core';
import {TableModule} from 'primeng/table';

const primeNgModule = [
  TableModule
]

@NgModule({
  declarations: [],
  imports: [
    primeNgModule
  ],
  exports: [
    primeNgModule
  ]
})
export class PrimeNgModule {
}
