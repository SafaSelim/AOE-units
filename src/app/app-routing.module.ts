import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UnitListComponent } from './pages/unit-list/unit-list.component';

const routes: Routes = [
  { path: 'units', loadChildren: () => import('src/app/pages/unit-list/unit-list.module').then(m=> m.UnitListModule) },
  { path: 'home', component: HomepageComponent, data: { title: 'Home' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
