import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { TableComponent } from 'shared-lib';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  imports: [TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);

  posts: Post[] = [];
  columns = [
    { key: 'userId', label: 'userId' },
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'body', label: 'Body' },
  ];

  ngOnInit(): void {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => (this.posts = data));
  }
}
