import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../../Models/Interfaces/Product/product";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddEditProductComponent} from "../../../Widgets/Dialogues/Product/add-edit-product/add-edit-product.component";
import {ProductService} from "../../../Services/Product/product.service";
import {SnackBarService} from "../../../Widgets/Services/SnackBar/snack-bar.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = []

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog, private productService: ProductService, private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      this.productList = res['productList'];
    })
  }

  openAddEditProductDialog(): void {
    const dialogRef = this.dialog.open(AddEditProductComponent, {
      width: '50vw',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.productService.productOBJ = res;
        this.onAddProduct();
      }
    })
  }

  onAddProduct(): void {
    this.productService.onAddProduct().subscribe(res => {
    }, error => {
      this.snackBarService.openSnackBar('Error Happened', 'Sorry')
    }, ()=>{
      this.snackBarService.openSnackBar('Added Successfully', 'Product')
    })
  }
}
