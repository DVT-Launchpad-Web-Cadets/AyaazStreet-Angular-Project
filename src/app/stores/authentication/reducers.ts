// import {createReducer, on} from '@ngrx/store';
// import {setUserLoginComplete, setUserRegistrationComplete} from './actions';
//
// export const userFeatureKey = 'user';
//
// export interface UserState {
//     username: string | null;
//     email: string | null;
// }
//
// export const initialState: UserState = {
//     username: null,
//     email: null,
// };
//
// export const userReducer = createReducer(
//     initialState,
//     on(setUserLoginComplete, (state, {username, email}) => ({
//         ...state,
//         username,
//         email,
//     })),
//     on(setUserRegistrationComplete, (state, {username, email}) => ({
//         ...state,
//         username,
//         email,
//     }))
// );