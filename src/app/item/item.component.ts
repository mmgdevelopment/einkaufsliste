import { Component, Input } from '@angular/core'
import { Status } from 'src/model/item'
import { DatabaseService } from '../database.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass'],
})
export class ItemComponent {
  @Input() id: string = ''
  @Input() title: string = ''
  @Input() status: Status = 'needed'

  constructor(private databaseService: DatabaseService) {}

  changeStatus(id: string, status: Status) {
    if (status === 'needed') {
      this.databaseService.updateItem(id, 'completed')
    } else if (status === 'completed') {
      this.databaseService.updateItem(id, 'needed')
    }
  }
}
