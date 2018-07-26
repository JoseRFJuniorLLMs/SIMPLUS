import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product14Component } from './product14.component';

const routes: Routes = [
    {
        path: '', component: Product14Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Product14RoutingModule {
}
