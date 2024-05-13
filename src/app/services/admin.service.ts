import {inject, Injectable} from '@angular/core';
import {collection, collectionData, doc, Firestore, query, setDoc} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    firestore = inject(Firestore);

    getProducts(): Observable<Product[]> {
        const fetchQuery = query(
            collection(this.firestore, "Products")
        );

        return collectionData(fetchQuery, {idField: "id"}) as Observable<Product[]>;
    }

    getCategories() {
        const fetchQuery = query(collection(this.firestore, "Categories"));
        return collectionData(fetchQuery) as unknown as Observable<string[]>;
    }

    addCategory(category: string) {
        return from(
            setDoc(doc(collection(this.firestore, "Categories")), {
                category,
            }).catch((err) => Error(err.message))
        );
    }
}
