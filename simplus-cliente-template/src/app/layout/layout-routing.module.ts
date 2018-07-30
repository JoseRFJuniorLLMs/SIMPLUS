import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'company', loadChildren: './company/company.module#CompanyModule' },
            { path: 'product', loadChildren: './product/product.module#ProductModule' },
            { path: 'product13', loadChildren: './product13/product13.module#Product13Module' },
            { path: 'product13c', loadChildren: './product13c/product13c.module#Product13cModule' },
            { path: 'product13p', loadChildren: './product13p/product13p.module#Product13pModule' },

            { path: 'product14', loadChildren: './product14/product14.module#Product14Module' },
            { path: 'product14c', loadChildren: './product14c/product14c.module#Product14cModule' },
            { path: 'product14p', loadChildren: './product14p/product14p.module#Product14pModule' },

            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
