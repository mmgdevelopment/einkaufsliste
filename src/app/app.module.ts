import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { FormsModule } from '@angular/forms'
import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { ItemComponent } from './item/item.component'

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
