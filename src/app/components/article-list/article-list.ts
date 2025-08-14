import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleThumbnailComponent } from "../article-thumbnail-component/article-thumbnail-component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.html',
  styleUrls: ['./article-list.css'],
  imports: [CommonModule, RouterModule, ArticleThumbnailComponent]
})
export class ArticleList {

  onLikeCliked(articleId: number) {
    const findArticle = this.articles.find(article => article.id === articleId);

    if (findArticle) {
      findArticle.isLiked = !findArticle.isLiked;
    }
  }
  private http = inject(HttpClient);
  articles: Article[] = [];

  constructor() {
    this.getArticles();
  };

  getArticles() {
    this.http.get<Article[]>('http://localhost:3000/articles').subscribe(articles => {
      this.articles = articles;
    });
  }
}
