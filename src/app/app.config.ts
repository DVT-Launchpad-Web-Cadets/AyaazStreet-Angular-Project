import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAtn-g4uiyo9-EFTIPqKgZfOGf3nOSUO_0",
    authDomain: "diamu-ayz14.firebaseapp.com",
    projectId: "diamu-ayz14",
    storageBucket: "diamu-ayz14.appspot.com",
    messagingSenderId: "191442399326",
    appId: "1:191442399326:web:2a0ee170cfe6165f96c4cf",
    measurementId: "G-GR1F161BB5"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), importProvidersFrom([provideFirebaseApp(() => initializeApp(firebaseConfig)), provideAuth(() => getAuth())])]
};
