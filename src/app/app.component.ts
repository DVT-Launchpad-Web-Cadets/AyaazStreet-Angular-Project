import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import {
	NzButtonComponent,
	NzButtonGroupComponent,
} from "ng-zorro-antd/button";
import {
	NzContentComponent,
	NzFooterComponent,
	NzHeaderComponent,
	NzLayoutComponent,
	NzSiderComponent,
} from "ng-zorro-antd/layout";
import { NzMenuDirective, NzMenuItemComponent } from "ng-zorro-antd/menu";
import { NzTypographyComponent } from "ng-zorro-antd/typography";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		RouterLink,
		NzLayoutComponent,
		NzHeaderComponent,
		NzSiderComponent,
		NzContentComponent,
		NzFooterComponent,
		NzButtonComponent,
		NzTypographyComponent,
		NgOptimizedImage,
		NzMenuDirective,
		NzMenuItemComponent,
		NzButtonGroupComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {}
