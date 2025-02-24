import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { TableElementComponent } from '../table-element/table-element.component';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'lib-table',
  imports: [TableElementComponent, NgFor, MatTableModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: { key: string, label: string }[] = [];

  get displayedColumns(): string[] {
    return this.columns.map(col => col.key);
  }
}
