// import {Injectable} from "@angular/core";
// import {Actions, createEffect, ofType} from "@ngrx/effects";
// import {AuthenticationService} from "../../services/authentication.service";
// import {catchError, EMPTY, map, switchMap} from "rxjs";
// import {setUserLogin, setUserLoginComplete, setUserRegistration, setUserRegistrationComplete} from "./actions";
// import {UserLogin, UserSignUp} from "../../models/user"
//
// @Injectable()
// export class UserEffects {
//     setUserLogin$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(setUserRegistration.type),
//             switchMap((action: UserLogin) =>
//                 this.authenticationService.login(action.email, action.password).pipe(
//                     map(({username, email}) => setUserLoginComplete({username, email})),
//                     catchError((error) => {
//                         console.error('This email and password may be incorrect: Make sure that you typed it correctly. Error: ', error);
//                         return EMPTY;
//                     })
//                 )
//             )
//         )
//     );
//
//     setUserRegistration$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(setUserLogin.type),
//             switchMap((action: UserSignUp) =>
//                 this.authenticationService
//                     .register(action.username, action.email, action.password)
//                     .pipe(
//                         map(({username, email}) => setUserRegistrationComplete({username, email})),
//                         catchError((error) => {
//                             console.error('There has been a problem while creating your account, please try again. Error: ', error);
//                             return EMPTY;
//                         })
//                     )
//             )
//         )
//     );
//
//     constructor(
//         private actions$: Actions,
//         private authenticationService: AuthenticationService,
//     ) {
//     }
// }