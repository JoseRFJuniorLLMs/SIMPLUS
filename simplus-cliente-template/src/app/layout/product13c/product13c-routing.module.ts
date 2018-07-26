import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product13cComponent } from './product13c.component';

const routes: Routes = [
    {
        path: '', component: Product13cComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Product13cRoutingModule {
}
