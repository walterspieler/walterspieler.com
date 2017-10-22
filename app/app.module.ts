import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MatIconRegistry, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
	imports: [
		BrowserModule,
		HomeModule,
		BrowserAnimationsModule,
		MatIconModule,
		HttpModule
	],
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent
	]
})
export class AppModule {
	constructor(mdIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
		mdIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg')); // Or whatever path you placed mdi.svg at
	}
}
