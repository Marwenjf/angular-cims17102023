import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // counter param
  counter=0 
  constructor() { }

  ngOnInit(): void {
  }

  add(){
  this.counter++
  }

  del(){
    this.counter--
  }

}
