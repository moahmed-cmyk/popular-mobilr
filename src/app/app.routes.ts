import { Routes } from '@angular/router';
import { AdminPage } from './admin-page/admin-page';
import { Footer } from './footer/footer';

export const routes: Routes = [
    { path: "", component: AdminPage },
    { path: "footer", component: Footer },
    { path: "header", component: Footer },
];
