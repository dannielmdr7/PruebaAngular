import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'corporativos',
    loadChildren: () => import('../../pages/corporativos/corporativos.module').then(m => m.CorporativosModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('../../pages/detalle/detalle/detalle.module').then(m => m.DetalleModule)
  }
];
