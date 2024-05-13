import {inject, Injectable} from "@angular/core";
import {
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    UserCredential
} from "@angular/fire/auth";
import {from, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class AuthenticationService {
    firebaseAuth = inject(Auth);
    router = inject(Router);

    register(
        email: string,
        username: string,
        password: string
    ): Observable<string | void> {
        return from(
            createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(
                (response) => {
                    updateProfile(response.user, {displayName: username});
                    return response.user.uid;
                }
            )
        );
    }

    login(email: string, password: string): Observable<UserCredential | void> {
        return from(
            signInWithEmailAndPassword(this.firebaseAuth, email, password).then(
                (response) => {
                    return response;
                }
            )
        );
    }

    logout(): Observable<void> {
        const promise = signOut(this.firebaseAuth);
        this.router.navigateByUrl('login');
        return from(promise);
    }
}
