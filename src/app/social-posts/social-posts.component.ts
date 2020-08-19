import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  showPopUp: boolean = false;
  posts: Post[] = [
    {
      title: 'Grand Circus',
      thought: 'Grand Circus is cool.',
    },
    {
      title: 'Ritual',
      thought: 'Ritual is a well developed app.',
    },
    {
      title: 'Scott',
      thought: 'Scott rides scooters.',
    },
  ];
  constructor() {}

  displayPopUp() {
    console.log(this.showPopUp);
    this.showPopUp = true;
  }

  onSubmit(newPost: Post) {
    this.posts.unshift(newPost);
    this.showPopUp = false;
    console.log(newPost);
  }

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  ngOnInit(): void {}
}
