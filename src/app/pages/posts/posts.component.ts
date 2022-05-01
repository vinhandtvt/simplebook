import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {

  }

  postSchema = {
    username: '',
    imageUrl: '',
    text: '',
    likes: [],
    comment: [{username: '', comment: ''}]
  }
}
