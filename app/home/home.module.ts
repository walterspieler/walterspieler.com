import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './containers/about/about.component';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		AboutComponent,
	],
	providers: [],
	exports: [AboutComponent]
})
export class HomeModule { }
