import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
	imports: [
		BrowserModule,
		HomeModule
	],
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent
	]
})
export class AppModule { }
