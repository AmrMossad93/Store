import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from "@angular/material/snack-bar";


const angularMaterialModule = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule
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
