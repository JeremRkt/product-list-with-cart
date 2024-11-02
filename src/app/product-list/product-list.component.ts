import { Component, OnInit } from '@angular/core';
import { ProductService} from '../services/product-service.service';
import { CartService, CartItem} from "../services/cart.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productDataService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productDataService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product): void {
    const cartItem: CartItem = {
      productId: product.productId,
      name: product.name,
      price: product.price,
      quantity: 1
    };
    this.cartService.addItem(cartItem);
  }
}
