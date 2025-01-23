import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-paid-article',
  templateUrl: './paid-article.component.html',
  styleUrls: ['./paid-article.component.css']
})
export class PaidArticleComponent implements OnInit{
  articles !:Article[];
  
    constructor(private as  : ArticleService) { }
  ngOnInit(): void {
    this.as.getPaidArticles().subscribe(res=>{
      this.articles= res;
     }
    , err=>{
      console.log(err);
   
    })
  }


}
