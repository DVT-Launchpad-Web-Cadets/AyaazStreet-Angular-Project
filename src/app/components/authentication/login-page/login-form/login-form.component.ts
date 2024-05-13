import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {RouterLink} from "@angular/router";
import {NzIconDirective} from "ng-zorro-antd/icon";

@Component({
    selector: 'app-login-form',
    standalone: true,
    imports: [
        FormsModule,
        NzButtonComponent,
        NzInputDirective,
        NzInputGroupComponent,
        RouterLink,
        NzIconDirective,
        ReactiveFormsModule
    ],
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
    showPassword = false;
    loginForm = new FormGroup({
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
    });

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.loginForm.value);
    }
}
