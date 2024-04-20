import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [CartViewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
  ],
})
export class CartModule {}
