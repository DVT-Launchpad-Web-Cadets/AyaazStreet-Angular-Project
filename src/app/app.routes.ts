import {Routes} from "@angular/router";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegisterPageComponent} from "./components/register-page/register-page.component";

export const routes: Routes = [
    {
        path: "",
        component: LandingPageComponent,
        title: "Home | Diamu"
    },
    {
        path: "login",
        component: LoginPageComponent,
        title: "Login | Diamu"
    },
    {
        path: "register",
        component: RegisterPageComponent,
        title: "Register | Diamu"
    },
];
