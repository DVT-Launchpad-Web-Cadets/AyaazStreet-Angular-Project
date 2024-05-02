import { Routes } from "@angular/router";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { RegisterPageComponent } from "./components/register-page/register-page.component";

export const routes: Routes = [
	{
		path: "",
		component: LandingPageComponent,
	},
	{
		path: "login",
		component: LoginPageComponent,
	},
	{
		path: "register",
		component: RegisterPageComponent,
	},
];
