import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule],
  exports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule],
  declarations: []
})
export class MaterialModule {}
