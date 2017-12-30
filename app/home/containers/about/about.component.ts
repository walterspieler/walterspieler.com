import { Component } from '@angular/core';

@Component({
	selector: 'about',
	styleUrls: ['about.component.scss'],
	template: `
	<div class="about container" fxLayout="row" fxLayoutWrap fxLayoutAlign="center center">
		<mat-card class="item" fxFlex="50" fxFlex.sm="75" fxFlex.xs="100">
			<div>
				<div class="mat-display-2" style="text-transform: uppercase;font-weight: 700;margin-bottom: .25em;">Matt Walterspieler</div>
			</div>
			<mat-card-header class="bio">
				<img mat-card-avatar src="/assets/matt.jpg">
				<mat-card-title>Fullstack Webdeveloper</mat-card-title>
				<mat-card-subtitle>Paris <span style="color:black;">🇫🇷 🇪🇺</span></mat-card-subtitle>
			</mat-card-header>
			<mat-card-content>
				<mat-list dense>
					<h3 matSubheader>Front-end</h3>
					<mat-divider></mat-divider>
					<mat-list-item>Javascript (ES 6)</mat-list-item>
					<mat-list-item>Angular & Angularjs</mat-list-item>
					<h3 matSubheader>Back-end</h3>
					<mat-divider></mat-divider>
					<mat-list-item>Node.js</mat-list-item>
					<h3 matSubheader>Deployment</h3>
					<mat-divider></mat-divider>
					<mat-list-item>Docker</mat-list-item>
					<mat-list-item>Kubernetes (K8s)</mat-list-item>
				</mat-list>
			</mat-card-content>
			<mat-card-actions fxLayoutAlign="end end">
				<a mat-button href="https://twitter.com/mwalterspieler" target="_blank"><mat-icon svgIcon="twitter"></mat-icon> Twitter</a>
				<a mat-button href="https://github.com/walterspieler" target="_blank"><mat-icon svgIcon="github-circle"></mat-icon> Github</a>
				<a mat-button href="https://www.linkedin.com/in/mattwalters3/" target="_blank"><mat-icon svgIcon="linkedin-box"></mat-icon> Linkedin</a>
			</mat-card-actions>
		</mat-card>
	</div>
  `
})
export class AboutComponent { }
