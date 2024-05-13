import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AdminService} from "../../services/admin.service";
import {Injectable} from "@angular/core";
import {catchError, EMPTY, map, switchMap} from "rxjs";
import {
    getCategories,
    getCategoriesComplete,
    getProducts,
    getProductsComplete,
    setAddCategory,
    setAddCategoryComplete
} from "./actions";
import {Product} from "../../models/product";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Injectable()
export class adminEffects {
    getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getProducts.type),
            switchMap(({adminId}: { adminId: string }) =>
                this.adminService.getProducts().pipe(
                    map((products: Product[]) => getProductsComplete({products})),
                    catchError((err) => {
                        this.notification.create(
                            "error",
                            "Could not get products",
                            err.message
                        );
                        return EMPTY;
                    })
                )
            )
        )
    );
    getCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getCategories.type),
            switchMap(() =>
                this.adminService.getCategories().pipe(
                    map((categories) => getCategoriesComplete({categories})),
                    catchError((err) => {
                        this.notification.create(
                            "error",
                            "Failed to fetch categories",
                            err.message
                        );
                        return EMPTY;
                    })
                )
            )
        )
    );

    addCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(setAddCategory.type),
            switchMap(({category}: { category: string }) =>
                this.adminService.addCategory(category).pipe(
                    map(() => {
                        this.notification.create(
                            "success",
                            "Success",
                            "Category Added Successfully"
                        );
                        return setAddCategoryComplete();
                    }),
                    catchError((err) => {
                        this.notification.create(
                            "error",
                            "Failed to add category",
                            err.message
                        );
                        return EMPTY;
                    })
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private adminService: AdminService,
        private notification: NzNotificationService
    ) {
    }
}
