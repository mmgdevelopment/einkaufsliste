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
  private allItems$: Observable<Item[]> | undefined
  public neededItems$: Observable<Item[]> | undefined
  public completedItems$: Observable<Item[]> | undefined
  public newItemtitle: string = ''

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.allItems$ = this.databaseService.getAllItems()
    this.neededItems$ = this.allItems$.pipe(
      map((item) => item.filter((item) => item.status === 'needed'))
    )
    this.completedItems$ = this.allItems$.pipe(
      map((item) => item.filter((item) => item.status === 'completed'))
    )
  }

  addItem() {
    if (this.newItemtitle.length > 1) {
      this.databaseService.createItem({
        title: this.newItemtitle,
        status: 'needed',
        id: '',
      })
      this.newItemtitle = ''
    }
  }
}
