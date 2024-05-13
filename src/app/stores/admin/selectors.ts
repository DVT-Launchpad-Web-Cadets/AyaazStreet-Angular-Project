import {createFeatureSelector, createSelector} from "@ngrx/store";
import {adminFeatureKey, AdminState} from "./reducers";

export const adminSelectFeature = createFeatureSelector<AdminState>(adminFeatureKey);

export const selectCategories = createSelector(
    adminSelectFeature,
    (state) => state.categories
);