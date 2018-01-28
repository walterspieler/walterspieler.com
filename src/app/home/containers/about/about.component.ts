import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    styleUrls: ['about.component.scss'],
    template: `
	<div class="about container" fxLayout="column" fxLayoutWrap fxLayoutAlign="center center">
		<mat-card class="item" fxFlex="50" fxFlex.sm="75" fxFlex.xs="100">
            <mat-card-header class="bio">
                <img mat-card-avatar src="/assets/matt.jpg">
				<mat-card-title><h1 class="mat-display-2">{{title}}.</h1></mat-card-title>
            </mat-card-header>
            <div class="subtitle">
                <h2>{{description}}</h2>
            </div>
            <mat-card-content>
				<mat-list dense>
					<h3 matSubheader>Front-end</h3>
					<mat-divider></mat-divider>
					<mat-list-item><mat-icon class="javascript" svgIcon="language-javascript"></mat-icon> Javascript (ES 6)</mat-list-item>
					<mat-list-item><mat-icon class="angular" svgIcon="angular"></mat-icon> Angular & Angularjs</mat-list-item>
					<h3 matSubheader>Back-end</h3>
					<mat-divider></mat-divider>
					<mat-list-item><mat-icon class="nodejs" svgIcon="nodejs"></mat-icon> Node.js</mat-list-item>
					<h3 matSubheader>Deployment</h3>
					<mat-divider></mat-divider>
					<mat-list-item><mat-icon class="cube" svgIcon="cube"></mat-icon> Docker</mat-list-item>
					<mat-list-item><mat-icon class="ship-wheel" svgIcon="ship-wheel"></mat-icon> Kubernetes (K8s)</mat-list-item>
				</mat-list>
			</mat-card-content>
			<mat-card-actions fxLayoutAlign="end end">
                <a mat-button href="https://twitter.com/mwalterspieler" target="_blank">
                    <mat-icon class="twitter" svgIcon="twitter"></mat-icon> Twitter
                </a>
                <a mat-button href="https://github.com/walterspieler" target="_blank">
                    <mat-icon class="github" svgIcon="github-circle"></mat-icon> Github
                </a>
                <a mat-button href="https://www.linkedin.com/in/mattwalters3/" target="_blank">
                    <mat-icon class="linkedin" svgIcon="linkedin-box"></mat-icon> Linkedin
                </a>
			</mat-card-actions>
        </mat-card>
        <p class="mat-caption">{{disc}}</p>
	</div>
  `
})
export class AboutComponent {
    title = 'Hello, my name is Matt Walterspieler';
    description = 'I\'m a full-stack developer && full-time problem solver && forever learner';
    disc = 'Made in Paris with ❤︎';
}
