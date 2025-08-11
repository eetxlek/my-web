import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post';
import { Post } from '../models/post.model';

@Component({
  standalone: true,
  selector: 'app-post-detail',
  imports: [CommonModule],
  template: './post-detail.html',
  styleUrls: ['./post-detail.css']})


export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostById(id);
  }

  getContentParagraphs(): string[] {
    if (!this.post?.content) return [];
    return this.post.content.split('\n').filter(p => p.trim().length > 0);
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }
}