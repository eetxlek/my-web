import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostService } from '../services/post';
import { Post } from '../models/post.model';

@Component({
  standalone: true,
  selector: 'app-blog',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class BlogComponent {

 posts: Post[]; // Declaramos sin inicializar

  constructor(private postService: PostService) {
    this.posts = this.postService.getAllPosts(); // Inicializamos en el constructor
  }

}
