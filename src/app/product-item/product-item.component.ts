import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  constructor(private productService: ProductService) {}

  addToCart() {
    this.productService.addToCart(this.product);
  }
}
