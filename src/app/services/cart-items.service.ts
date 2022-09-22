import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem'

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  constructor() { }

  cartItems: CartItem[] = [];

  setData(data: CartItem): void {
    let cartItem = this.cartItems.find(item => item.id == data.id);
    if (cartItem) {
      cartItem.quantity += data.quantity;
    } else {
      this.cartItems.push(data)
    }
  }

  getData(): CartItem[] {
    const ccartItems = this.cartItems;

    return ccartItems;
  }

  removeItem(cartItem: CartItem): void {
    this.cartItems = this.cartItems.filter(item => item.id !== cartItem.id);
  }
}
