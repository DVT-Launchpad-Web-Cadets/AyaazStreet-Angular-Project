import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent} from "ng-zorro-antd/layout";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzIconDirective} from "ng-zorro-antd/icon";

@Component({
    selector: "app-login-page",
    standalone: true,
    imports: [
        NgOptimizedImage,
        NzButtonComponent,
        NzContentComponent,
        NzHeaderComponent,
        NzLayoutComponent,
        RouterLink,
        FormsModule,
        NzInputDirective,
        NzInputGroupComponent,
        NzIconDirective
    ],
    templateUrl: "./login-page.component.html",
    styleUrl: "./login-page.component.scss",
})
export class LoginPageComponent {
    showPassword = false;

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
}
