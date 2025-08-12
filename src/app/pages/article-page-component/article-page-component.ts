import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article-page-component',
  imports: [],
  templateUrl: './article-page-component.html',
  styleUrl: './article-page-component.css'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
  }
}
