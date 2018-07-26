import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product14pComponent } from './product14p.component';

const routes: Routes = [
    {
        path: '', component: Product14pComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Product14pRoutingModule {
}
