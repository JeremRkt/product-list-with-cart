import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addItem(item: CartItem): void {
    const currentItems = this.cartItems.getValue();
    const existingItem = currentItems.find(i => i.productId === item.productId);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      currentItems.push(item);
    }
    this.cartItems.next(currentItems);
  }

  removeItem(productId: number): void {
    const updatedItems = this.cartItems.getValue().filter(i => i.productId !== productId);
    this.cartItems.next(updatedItems);
  }

  getTotalPrice(): number {
    return this.cartItems.getValue().reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems.next([]);
  }
}
