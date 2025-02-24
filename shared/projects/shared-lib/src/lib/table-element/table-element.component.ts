import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-table-element',
  templateUrl: './table-element.component.html',
})
export class TableElementComponent {
  @Input() row: any;
  @Input() column!: { key: string; label: string };
}
