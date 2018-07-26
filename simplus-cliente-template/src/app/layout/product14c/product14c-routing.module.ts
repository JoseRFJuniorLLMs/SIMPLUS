import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product14cComponent } from './product14c.component';

const routes: Routes = [
    {
        path: '', component: Product14cComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Product14cRoutingModule {
}
