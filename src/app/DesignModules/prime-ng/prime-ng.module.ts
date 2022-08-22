import {NgModule} from '@angular/core';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';

const primeNgModule = [
  TableModule,
  RatingModule
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
