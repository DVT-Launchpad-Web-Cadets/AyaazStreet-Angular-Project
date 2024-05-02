import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { NzButtonComponent } from "ng-zorro-antd/button";
import {
	NzContentComponent,
	NzFooterComponent,
	NzHeaderComponent,
	NzLayoutComponent,
} from "ng-zorro-antd/layout";
import { NzTypographyComponent } from "ng-zorro-antd/typography";

@Component({
	selector: "app-landing-page",
	standalone: true,
	imports: [
		NgOptimizedImage,
		NzButtonComponent,
		NzContentComponent,
		NzFooterComponent,
		NzHeaderComponent,
		NzLayoutComponent,
		RouterLink,
		RouterOutlet,
		NzTypographyComponent,
	],
	templateUrl: "./landing-page.component.html",
	styleUrl: "./landing-page.component.scss",
})
export class LandingPageComponent {}
