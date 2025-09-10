import { Routes } from '@angular/router';
import { AdminPage } from './admin-page/admin-page';
import { Footer } from './footer/footer';
import { HomePage } from './home-page/home-page';
import { AccountPage } from './account-page/account-page';
import { MorePage } from './more-page/more-page';
import { CustomerDetailPage } from './customer-detail-page/customer-detail-page';

export const routes: Routes = [
    { path: "", component: AdminPage },
    { path: "footer", component: Footer },
    { path: "header", component: Footer },
    { path: "home-page", component: HomePage },
    { path: "account-page", component: AccountPage },
    { path: "more", component: MorePage },
    { path: "customer-detail", component: CustomerDetailPage },
];
