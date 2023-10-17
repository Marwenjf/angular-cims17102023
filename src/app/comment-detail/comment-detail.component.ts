import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  @Input() item:any
  
  constructor() { }

  ngOnInit(): void {
  }

}
