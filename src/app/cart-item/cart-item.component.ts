import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/products.service'
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter;
  cartItemData: Product;
  constructor(private productService: ProductService) {
    this.cartItem = {
      id: 0,
      quantity: 0,
    }
    this.cartItemData = {
      id: 0,
      name: '',
      description: '',
      url: '',
      price: 0,
    }
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      for (const product of data) {
        if (product.id === this.cartItem.id) {
          this.cartItemData = product
          break
        }
      }
    })  
  }

  removeItemF(cartItem: CartItem): void {
    alert("Removed from your cart");
    this.removeItem.emit(cartItem);
  }
}
