import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  infos = {
    name: 'marwen',
    email: 'marwen@mail.com',
    phone: '00000000'
  }
  //table
  comments:any[]=[]
  
  comment={id:0,message:''}

  constructor() { }

  ngOnInit(): void {
  }

  addComment(){
    this.comment.id = this.comments.length+1
    this.comments.push({id:this.comment.id,message:this.comment.message})
    this.comment.message=''
  }
}
