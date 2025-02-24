import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from 'shared-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfe1';
}
