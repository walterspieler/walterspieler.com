import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './containers/about/about.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
  declarations: [AboutComponent]
})
export class HomeModule {}
