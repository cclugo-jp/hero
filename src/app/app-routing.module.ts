import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafesComponent } from './cafes/cafes.component';

const routes: Routes = [
	{ path: 'cafes', component: CafesComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
