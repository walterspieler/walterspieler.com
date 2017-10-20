import { Component } from '@angular/core';

@Component({
	selector: 'about',
	styleUrls: ['about.component.scss'],
	template: `
    <h1>Matt Walterspieler</h1>
    <h2>FullStack Webdeveloper</h2>

    <p></p>

    <h3>Most used technologies</h3>
    <ul>
      <li>Javascript (ECMAScript 6)</li>
      <li>Angular & Angularjs</li>
      <li>Node.js</li>
      <li>Docker</li>
      <li>Kubernetes (K8s)</li>
    </ul>

    <h3>Social</h3>
    <ul>
      <li>Twitter</li>
      <li>Github</li>
    </ul>
  `
})
export class AboutComponent { }
