import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mdIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    mdIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('assets/mdi.svg')
    ); // Or whatever path you placed mdi.svg at
  }
}
