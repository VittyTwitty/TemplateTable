import { Component, Input, OnInit } from '@angular/core';
import { TableSettings } from '../models/table-settings';


@Component({
  selector: 'app-vt-table',
  templateUrl: './vt-table.component.html',
  styleUrls: ['./vt-table.component.scss']
})
export class VtTableComponent implements OnInit {

  @Input() items: any[];
  @Input() columns: any[];
  @Input() columnsHeader: TableSettings[];
  wasClicked = false;

  constructor() {
  }

  ngOnInit() {
  }

  public sort(ev) {
    this.wasClicked = !this.wasClicked;
  }

}
