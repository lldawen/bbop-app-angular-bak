import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencyComponent } from './residency/residency.component';
import { ResidencyFormComponent } from './residency-form/residency-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'residency', component: ResidencyComponent },
  { path: 'residency/get/:id', component: ResidencyFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
