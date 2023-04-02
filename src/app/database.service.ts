import { Injectable } from '@angular/core'
import {
  CollectionReference,
  DocumentData,
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  updateDoc,
} from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { Item, Status } from 'src/model/item'

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private ItemCollection: CollectionReference<DocumentData>

  constructor(private firestore: Firestore) {
    this.ItemCollection = collection(this.firestore, 'items')
  }

  getAllItems() {
    return collectionData(this.ItemCollection, {
      idField: 'id',
    }) as Observable<Item[]>
  }

  createItem(item: Item) {
    return addDoc(this.ItemCollection, item)
  }

  updateItem(id: string, status: Status) {
    const docRef = doc(this.ItemCollection, id)
    updateDoc(docRef, { status: status })
  }
}
