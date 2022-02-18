import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/Http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';
import { NewVendorComponent } from './vendor/new/new.component';
import { PartComponent } from './part/part.component';
import { NewPartComponent } from './part/new/new.component';
import { PriceComponent } from './price/price.component';
import { NewPriceComponent } from './price/new/new.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { NewPurchaseOrderComponent } from './purchase-order/new/new.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'vendors',
    component: VendorComponent,
    data: {
      title: 'Lista de vendedores'
    }
  },
  {
    path: 'vendors/new',
    component: NewVendorComponent,
    data: {
      title: 'Crear nuevo vendedor'
    }
  },
  {
    path: 'vendors/update/:id',
    component: NewVendorComponent,
    data: {
      title: 'Actualizar vendedor'
    }
  },
  {
    path: 'parts',
    component: PartComponent,
    data: {
      title: 'Lista de partes'
    }
  },
  {
    path: 'parts/new',
    component: NewPartComponent,
    data: {
      title: 'Crear nueva parte'
    }
  },
  {
    path: 'parts/update/:id',
    component: NewPartComponent,
    data: {
      title: 'Actualizar parte'
    }
  },
  {
    path: 'prices',
    component: PriceComponent,
    data: {
      title: 'Lista de precios'
    }
  },
  {
    path: 'prices/new',
    component: NewPriceComponent,
    data: {
      title: 'Crear nuevo precio'
    }
  },
  {
    path: 'prices/update/:ids',
    component: NewPriceComponent,
    data: {
      title: 'Actualizar precio'
    }
  },
  {
    path: 'purchase-orders',
    component: PurchaseOrderComponent,
    data: {
      title: 'Lista de compras'
    }
  },
  {
    path: 'purchase-orders/new',
    component: NewPurchaseOrderComponent,
    data: {
      title: 'Comprar'
    }
  },
  {
    path: 'purchase-orders/update/:id',
    component: NewPurchaseOrderComponent,
    data: {
      title: 'Actualizar compra'
    }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VendorComponent,
    NewVendorComponent,
    PartComponent,
    NewPartComponent,
    PriceComponent,
    NewPriceComponent,
    PurchaseOrderComponent,
    NewPurchaseOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
