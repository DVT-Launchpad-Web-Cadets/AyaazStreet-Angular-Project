import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzContentComponent, NzLayoutComponent} from "ng-zorro-antd/layout";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {RouterLink} from "@angular/router";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";

@Component({
    selector: "app-register-page",
    standalone: true,
    imports: [
        FormsModule,
        NgOptimizedImage,
        NzButtonComponent,
        NzContentComponent,
        NzIconDirective,
        NzInputDirective,
        NzInputGroupComponent,
        NzLayoutComponent,
        RouterLink,
        NzCheckboxComponent
    ],
    templateUrl: "./register-page.component.html",
    styleUrl: "./register-page.component.scss",
})
export class RegisterPageComponent {
    showPassword = false;
    termsAndConditions = false;

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
}
