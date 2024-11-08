import { Component, Input } from '@angular/core';
import {CartItem, CartService} from "../services/cart.service";

@Component({
  selector: 'app-order-confirmation-modal',
  templateUrl: './order-confirmation-modal.component.html',
  styleUrls: ['./order-confirmation-modal.component.css']
})
export class OrderConfirmationModalComponent {
  @Input() isVisible = false; // Control visibility of the modal
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  closeModal() {
    this.isVisible = false;
  }

  startNewOrder() {
    this.cartService.clearCart();
    this.closeModal();
  }
}
