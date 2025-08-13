import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-thumbnail-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './article-thumbnail-component.html',
  styleUrl: './article-thumbnail-component.css'
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;

  @Output() likeClicked: EventEmitter<number> = new EventEmitter<number>();

  toggleLike() {
    this.likeClicked.emit(this.article.id)
  }
}
