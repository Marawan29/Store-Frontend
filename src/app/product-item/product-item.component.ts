import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartItem } from '../models/CartItem';
import { CartItemsService } from '../services/cart-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  quantity: number = 1;
  constructor(
    private cartItemsService: CartItemsService,
    private router: Router
  ) {
      this.product = {
        id: 0,
        name: '',
        description: '',
        url: '',
        price: 0,
      }
    }

  ngOnInit(): void {
 
  }

  submitForm(): void {
    const cartItem: CartItem = {
      id: this.product.id,
      quantity: this.quantity
    }
    this.cartItemsService.setData(cartItem);
    alert("Added to your cart")
    this.quantity = 1;
  }

  ItemDetails(): void {
    this.router.navigate([`${this.product.id}`]);
  }
}
