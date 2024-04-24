import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { HomeComponent } from './pages/main/home/home.component';
import { NotFoundComponent } from './pages/main/not-found/not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeAdminComponent } from './pages/admin-dashboard/home/home.component';

import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { ProductsComponent } from './pages/main/products/products.component';
import { authenticatedGuard } from './guards/authenticated/authenticated.guard';
import { ShipingComponent } from './pages/main/shiping/shiping.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shiping', component: ShipingComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [authenticatedGuard],
    children: [{ path: '', component: HomeAdminComponent }],
  },
  { path: '**', component: NotFoundComponent },
];
