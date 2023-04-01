import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ItemComponent } from './item/item.component'
import { ItemsCompletedComponent } from './items-completed/items-completed.component'
import { ItemsNeededComponent } from './items-needed/items-needed.component'

@NgModule({
  declarations: [
    AppComponent,
    ItemsNeededComponent,
    ItemsCompletedComponent,
    ItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
