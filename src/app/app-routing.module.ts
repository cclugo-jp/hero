import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafesComponent } from './cafes/cafes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CafeDetailComponent } from './cafe-detail/cafe-detail.component';

const routes: Routes = [
	{ path: 'cafes', component: CafesComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'detail/:id', component: CafeDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
