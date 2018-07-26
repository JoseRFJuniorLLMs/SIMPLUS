import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product13Component } from './product13.component';

const routes: Routes = [
    {
        path: '', component: Product13Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Product13RoutingModule {
}
