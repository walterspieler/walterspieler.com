import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	styleUrls: ['app.component.scss'],
	encapsulation: ViewEncapsulation.None,
	template: `
    <div class="app">
      <about></about>
    </div>
  `
})
export class AppComponent { }
