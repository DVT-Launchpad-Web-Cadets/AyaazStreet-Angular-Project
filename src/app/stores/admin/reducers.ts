import {Product} from "../../models/product";
import {createReducer, on} from "@ngrx/store";
import {
    getCategories,
    getCategoriesComplete,
    getProducts,
    getProductsComplete,
    setAddCategory,
    setSelectedProduct
} from "./actions";

export const adminFeatureKey = "admin";

export interface AdminState {
    products: Product[];
    selectedProduct?: Product;
    categories: string[];
}

const initialState: AdminState = {
    products: [],
    categories: [],
};

export const adminReducer = createReducer(
    initialState,
    on(getProducts, (state) => ({
        ...state,
    })),
    on(getProductsComplete, (state, {products}) => ({
        ...state,
        products,
    })),
    on(getCategories, (state) => ({
        ...state,
    })),
    on(getCategoriesComplete, (state, {categories}) => ({
        ...state,
        categories,
    })),
    on(setSelectedProduct, (state, {product}) => ({
        ...state,
        selectedProduct: product,
    })),
    on(setAddCategory, (state, {category}) => ({
        ...state,
        categories: [...state.categories, category]
    })),
);