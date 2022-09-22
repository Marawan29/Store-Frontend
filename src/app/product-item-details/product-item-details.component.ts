import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';
import { ProductService } from '../services/products.service'
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  id = 0;
  quantity: number = 1;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartItemsService: CartItemsService
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
    this.route.pathFromRoot[1].url.subscribe(segment => {
      this.id = parseInt(segment[0].path)
    })
    console.log(this.id);
    this.productService.getProducts().subscribe(data => {
      for (const product of data) {
        if (this.id === product.id) {
          this.product = product
          break
        }
      }
    })
  }

  submitForm(): void {
    const cartItem: CartItem = {
      id: this.id,
      quantity: this.quantity
    }
    this.cartItemsService.setData(cartItem);
    alert("Added to your cart")
    this.quantity = 1;
  }
}
