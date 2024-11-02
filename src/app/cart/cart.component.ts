import { Component, OnInit } from '@angular/core';
import {CartItem, CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  showModal: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(productId: number): void {
    this.cartService.removeItem(productId);
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  confirmOrder(): void {
    this.showModal = true; // Open the modal when confirming the order
  }
}
