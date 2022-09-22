import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { CartItemsService } from '../services/cart-items.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/products.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  divStyle = "block";
  cartItems: CartItem[] = this.cartItemsService.getData();
  totalPrice = 0;

  fullName = '';
  address = '';
  cardNumber = '';

  constructor(
    private cartItemsService: CartItemsService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      for (const item of this.cartItems) {
        for (const product of data) {
          if (item.id === product.id) {
            this.totalPrice += product.price * item.quantity
          }
        }
      }
      this.totalPrice = Math.round(this.totalPrice * 100) / 100;
    })
  }

  removeItem(cartItem: CartItem): void {
    this.cartItems = this.cartItems.filter(item => item.id !== cartItem.id);
    this.cartItemsService.removeItem(cartItem);
    this.totalPrice = 0;
    this.productService.getProducts().subscribe(data => {
      for (const item of this.cartItems) {
        for (const product of data) {
          if (item.id === product.id) {
            this.totalPrice += product.price * item.quantity
          }
        }
      }
      this.totalPrice = Math.round(this.totalPrice * 100) / 100;
    })
  }
  submitForm(): void {
    this.router.navigate(['/payment-succesful']);
    for (const cartItem of this.cartItems) {
      this.removeItem(cartItem);
    }
  }
}
