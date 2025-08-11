import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class PostComponent {

 @Input({ required: true }) post!: Post; // ← Más limpio y usando la interfaz
}
