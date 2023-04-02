import { Component, OnInit } from '@angular/core'
import { Observable, map } from 'rxjs'
import { Item } from 'src/model/item'
import { DatabaseService } from './database.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  _databaseService
  allItems$: Observable<Item[]>
  neededItems$: Observable<Item[]> | undefined
  completedItems$: Observable<Item[]> | undefined
  newItemtitle: string = ''

  constructor(databaseService: DatabaseService) {
    this._databaseService = databaseService
    this.allItems$ = this._databaseService.getAllItems()
  }

  ngOnInit(): void {
    this.neededItems$ = this.allItems$.pipe(
      map((item) => item.filter((item) => item.status === 'needed'))
    )
    this.completedItems$ = this.allItems$.pipe(
      map((item) => item.filter((item) => item.status === 'completed'))
    )
  }

  addItem() {
    if (this.newItemtitle.length > 1) {
      this._databaseService.createItem({
        title: this.newItemtitle,
        status: 'needed',
        id: '',
      })
      this.newItemtitle = ''
    }
  }
}
