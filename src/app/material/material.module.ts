import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule, FontAwesomeModule],
  exports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule, FontAwesomeModule],
  declarations: []
})
export class MaterialModule {}
