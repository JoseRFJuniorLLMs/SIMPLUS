import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product13pComponent } from './product13p.component';

const routes: Routes = [
    {
        path: '', component: Product13pComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Product13pRoutingModule {
}
