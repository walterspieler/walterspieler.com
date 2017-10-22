import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AboutComponent } from './containers/about/about.component';


@NgModule({
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		FlexLayoutModule
	],
	declarations: [
		AboutComponent,
	],
	providers: [],
	exports: [AboutComponent]
})
export class HomeModule { }
