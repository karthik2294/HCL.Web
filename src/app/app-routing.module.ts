import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerLayoutComponent } from './shared/components/container-layout/container-layout.component';


const routes: Routes = [
  {
    path: '', component: ContainerLayoutComponent,
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
