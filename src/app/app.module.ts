import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SuccsesfulPaymentComponent } from './succsesful-payment/succsesful-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailsComponent,
    CartComponent,
    HeaderComponent,
    CartItemComponent,
    SuccsesfulPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
