import { Component, Input, OnInit } from '@angular/core'
import { Item, Status } from 'src/model/item'
import { DatabaseService } from '../database.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass'],
})
export class ItemComponent implements OnInit {
  @Input() id: string | undefined
  @Input() title: string | undefined
  @Input() status: Status | undefined
  item!: Item
  _databaseService

  constructor(databaseService: DatabaseService) {
    this._databaseService = databaseService
  }

  ngOnInit(): void {
    if (this.id && this.title && this.status) {
      this.item = {
        id: this.id,
        title: this.title,
        status: this.status,
      }
      console.log('item sucessfully created:', this.item)
    } else {
      this.item = {
        id: '999999',
        title: 'failure',
        status: 'needed',
      }
      console.log('item could not be created')
    }
  }

  changeStatus(id: string, status: Status) {
    if (status === 'needed') {
      this._databaseService.updateItem(id, 'completed')
    } else if (status === 'completed') {
      this._databaseService.updateItem(id, 'needed')
    }
  }
}
