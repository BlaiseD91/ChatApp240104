import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newMessage:any
  constructor(private base:BaseService) {}

  addMessage(){
    let time = new Date().toLocaleTimeString()
    let body={name:"Balázs", time: time, message:this.newMessage}
    this.base.addMessage(body)
  }

}
