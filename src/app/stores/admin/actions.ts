import {createAction, props} from "@ngrx/store";
import {Product} from "../../models/product";

export const getCategories = createAction(
    '[ADMIN] GetCategories',
);

export const getCategoriesComplete = createAction(
    '[ADMIN] GetCategoriesComplete',
    props<{ categories: string[] }>()
);

export const setAddCategory = createAction(
    "[ADMIN] SetAddCategory",
    props<{ category: string }>()
);

export const setAddCategoryComplete = createAction(
    "[ADMIN] SetAddCategoryComplete"
);

export const getProducts = createAction(
    '[ADMIN] GetProducts',
);

export const getProductsComplete = createAction(
    '[ADMIN] GetProductsComplete',
    props<{ products: Product[] }>()
);

export const setSelectedProduct = createAction(
    '[ADMIN] SetSelectedProduct',
    props<{ product: Product }>()
);