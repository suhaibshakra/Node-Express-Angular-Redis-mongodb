import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/entities/product/product.service';
import { IProduct } from 'src/app/entities/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  products= {
    "image":""
  };
  @Input() productToDisplay: IProduct = null;

  constructor(protected productService: ProductService) { }

  // Load all the products when starting the view.
  ngOnInit(): void {
    this.loadAll();
  }

  // If new product created, we add it to the list.
  ngOnChanges(): void {
  
  }


  // Load all products.
  private loadAll() {
    this.productService
      .get()
      .then((result) => {
        this.products = result ? JSON.parse(result) : '';
        console.log(this.products)
        console.log("this.products")
      });
  }

}
