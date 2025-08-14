import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-page-component',
  imports: [CommonModule],
  templateUrl: './article-page-component.html',
  styleUrl: './article-page-component.css'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.loadArticle(this.articleId);
    });
  }
  article$!: Observable<Article>;

  private http = inject(HttpClient);

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  };

  loadArticle(id: number) {
    this.article$ = this.getArticleById(id);
  }

}
