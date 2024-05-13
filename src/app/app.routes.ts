import {Routes} from "@angular/router";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {LoginPageComponent} from "./components/authentication/login-page/login-page.component";
import {RegisterPageComponent} from "./components/authentication/register-page/register-page.component";
import {AdminPageComponent} from "./components/admin-page/admin-page.component";

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
    {
        path: "admin",
        component: AdminPageComponent,
        title: "Admin | Diamu",
        children: [
            {
                path: "add",
                component: AdminPageComponent,
                title: "Add products | Diamu"
            },
            {
                path: "preview",
                component: AdminPageComponent,
                title: "Preview | Diamu"
            }
        ]
    },
];
