import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export class InvoiceService implements OnInit {
  changeData = new Subject();
  users;
  index;
  constructor() { }

  ngOnInit(){
    
   }
  deleteInvoice(){
    this.index = JSON.parse(localStorage.getItem("index"))
    this.users = JSON.parse(localStorage.getItem("users"));
    this.users.splice(this.index,1);
    localStorage.setItem("users",JSON.stringify(this.users))
    this.changeData.next()
  }
  updateInvoice(invoice){
    this.index = JSON.parse(localStorage.getItem("index"))
    this.users = JSON.parse(localStorage.getItem("users"));
    this.users[this.index] = invoice;
    localStorage.setItem("users",JSON.stringify(this.users))
    this.changeData.next()
  }
  createInvoice(invoice){
    this.users = JSON.parse(localStorage.getItem("users"));
    this.users.push(invoice);
    localStorage.setItem("users",JSON.stringify(this.users))
    this.changeData.next()
  }
}
