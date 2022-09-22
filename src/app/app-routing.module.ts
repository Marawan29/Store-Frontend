import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component'
import { ProductListComponent } from './product-list/product-list.component'
import { SuccsesfulPaymentComponent } from './succsesful-payment/succsesful-payment.component'
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component'


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment-succesful', component: SuccsesfulPaymentComponent },
  { path: ':id', component: ProductItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
