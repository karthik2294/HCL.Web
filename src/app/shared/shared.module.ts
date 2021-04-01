import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerLayoutComponent } from './components/container-layout/container-layout.component';
import { RouterModule } from '@angular/router';
import { PanelComponent } from './components/panel/panel.component';



@NgModule({
  declarations: [ContainerLayoutComponent, PanelComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [ContainerLayoutComponent, PanelComponent]
})
export class SharedModule { }
