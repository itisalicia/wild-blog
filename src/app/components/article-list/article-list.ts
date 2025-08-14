import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleThumbnailComponent } from "../article-thumbnail-component/article-thumbnail-component";
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.html',
  styleUrls: ['./article-list.css'],
  imports: [CommonModule, RouterModule, ArticleThumbnailComponent]
})
export class ArticleList {
  articles: Article[] = [];
  private apiService = inject(ApiService);

  ngOnInit() {
    this.apiService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

  onLikeCliked(articleId: number) {
    this.articles$.subscribe(articles => {
      const findArticle = articles.find(article => article.id === articleId);

      if (findArticle) {
        findArticle.isLiked = !findArticle.isLiked;
      }
    });
  }
  articles$!: Observable<Article[]>;

}
