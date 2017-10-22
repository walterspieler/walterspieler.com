import { Component } from '@angular/core';

@Component({
	selector: 'about',
	styleUrls: ['about.component.scss'],
	template: `
	<div class="about container" fxLayout="row" fxLayoutWrap fxLayoutAlign="center center">
		<mat-card class="item" fxFlex="50">
			<div>
				<div class="mat-display-2" style="text-transform: uppercase;font-weight: 700;margin-bottom: .25em;">Matt Walterspieler</div>
			</div>
			<mat-card-header>
				<img mat-card-avatar src="/assets/matt.jpg">
				<mat-card-title style="margin: 4px 0;">Fullstack Webdeveloper</mat-card-title>
				<mat-card-subtitle><span style="color:black;">🇫🇷</span> Paris</mat-card-subtitle>
			</mat-card-header>
			<mat-card-content>
				<mat-list dense>
					<h3 matSubheader>Skills</h3>
					<mat-divider></mat-divider>
					<mat-list-item>Javascript (ES 6)</mat-list-item>
					<mat-list-item>Angular & Angularjs</mat-list-item>
					<mat-list-item>Node.js</mat-list-item>
					<mat-list-item>Docker</mat-list-item>
					<mat-list-item>Kubernetes (K8s)</mat-list-item>
					<mat-divider></mat-divider>
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
