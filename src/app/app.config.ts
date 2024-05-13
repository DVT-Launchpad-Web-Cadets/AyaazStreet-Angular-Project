import {ApplicationConfig, importProvidersFrom} from "@angular/core";
import {provideRouter} from "@angular/router";

import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {routes} from "./app.routes";
import {en_US, provideNzI18n} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from '@angular/common/http';
import {environment} from "../environments/environment.development";
import {provideState, provideStore} from '@ngrx/store';
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {provideEffects} from "@ngrx/effects";
import {adminFeatureKey, adminReducer} from "./stores/admin/reducers";
import {adminEffects} from "./stores/admin/effects";

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        importProvidersFrom([
            provideFirebaseApp(() => initializeApp(environment.FIREBASE_CONFIG)),
            provideFirestore(() => getFirestore()),
            provideAuth(() => getAuth()),
            FormsModule
        ]), provideNzI18n(en_US), provideAnimationsAsync(), provideHttpClient(),
        provideStore(),
        provideState({name: adminFeatureKey, reducer: adminReducer}),
        provideEffects(adminEffects),
    ],
};
