import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerLayoutComponent } from './components/container-layout/container-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContainerLayoutComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [ContainerLayoutComponent]
})
export class SharedModule { }
