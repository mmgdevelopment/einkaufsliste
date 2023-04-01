import { Component } from '@angular/core'
import { map, of } from 'rxjs'
import { Item } from 'src/model/item'

@Component({
  selector: 'app-items-completed',
  templateUrl: './items-completed.component.html',
  styleUrls: ['./items-completed.component.sass'],
})
export class ItemsCompletedComponent {
  private allItems: Item[] = [
    { id: '151235', title: 'Banane', status: 'needed' },
    { id: '152112', title: 'Apfel', status: 'needed' },
    { id: '789465', title: 'Birne', status: 'completed' },
    { id: '852963', title: 'Käse', status: 'completed' },
    { id: '325746', title: 'Eier', status: 'needed' },
    { id: '125874', title: 'Sahne', status: 'needed' },
    { id: '856742', title: 'Banane', status: 'completed' },
  ]

  items$ = of(this.allItems)

  completedItems$ = this.items$.pipe(
    map((item) => item.filter((item) => item.status === 'completed'))
  )
}
