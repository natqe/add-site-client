import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { WindowOptionListDataSource } from './window-option-list-datasource';

@Component({
  selector: 'window-option-list',
  templateUrl: './window-option-list.component.html',
  styleUrls: ['./window-option-list.component.css']
})
export class WindowOptionListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: WindowOptionListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new WindowOptionListDataSource(this.paginator, this.sort);
  }
}
