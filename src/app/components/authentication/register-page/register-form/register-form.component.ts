import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {RouterLink} from "@angular/router";
import {NzIconDirective} from "ng-zorro-antd/icon";

@Component({
    selector: 'app-register-form',
    standalone: true,
    imports: [
        FormsModule,
        NzButtonComponent,
        NzCheckboxComponent,
        NzInputDirective,
        NzInputGroupComponent,
        RouterLink,
        NzIconDirective,
        ReactiveFormsModule
    ],
    templateUrl: './register-form.component.html',
    styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
    showPassword = false;
    termsAndConditions = false;
    registerForm = new FormGroup({
        username: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
        termsAndConditions: new FormControl(false, [Validators.requiredTrue])
    });

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.registerForm.value);
    }

    onCheckBoxClick(event: MouseEvent) {
        this.termsAndConditions = !this.termsAndConditions;
        this.registerForm.get("termsAndConditions")?.setValue(this.termsAndConditions);
    }
}
