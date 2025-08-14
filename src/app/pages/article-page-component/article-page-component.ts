import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-article-page-component',
  imports: [CommonModule],
  templateUrl: './article-page-component.html',
  styleUrl: './article-page-component.css'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  private apiService = inject(ApiService);

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.article$ = this.apiService.getArticleById(this.articleId);

    });
  }
  article$!: Observable<Article>;

}
