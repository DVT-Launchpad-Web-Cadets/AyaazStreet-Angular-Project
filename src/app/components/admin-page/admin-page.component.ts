import {Component} from '@angular/core';
import {AsyncPipe, NgOptimizedImage, NgStyle} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {RouterLink} from "@angular/router";
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzMenuDirective, NzMenuItemComponent} from "ng-zorro-antd/menu";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzInputDirective} from "ng-zorro-antd/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {selectCategories} from "../../stores/admin/selectors";
import {Store} from "@ngrx/store";
import {AdminState} from "../../stores/admin/reducers";
import {getCategories, setAddCategory} from "../../stores/admin/actions";

@Component({
    selector: 'app-admin-page',
    standalone: true,
    imports: [
        NgOptimizedImage,
        NzButtonComponent,
        NzContentComponent,
        NzHeaderComponent,
        NzLayoutComponent,
        RouterLink,
        NzAvatarComponent,
        NgStyle,
        NzIconDirective,
        NzSiderComponent,
        NzMenuDirective,
        NzMenuItemComponent,
        NzTooltipDirective,
        NzDividerComponent,
        NzInputDirective,
        ReactiveFormsModule,
        AsyncPipe,
    ],
    templateUrl: './admin-page.component.html',
    styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
    categories$ = this.store.select(selectCategories);
    isCollapsed = false;
    addCategoryForm = new FormGroup({
        category: new FormControl("", [Validators.required]),
    });
    protected readonly console = console;

    constructor(private store: Store<AdminState>) {
        store.dispatch(getCategories());
    }

    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
    }

    onSubmit() {
        const newCategory = this.addCategoryForm.getRawValue();
        if (newCategory) {
            // @ts-ignore
            this.store.dispatch(setAddCategory(newCategory));
        }
        this.addCategoryForm.reset()
    }
}
