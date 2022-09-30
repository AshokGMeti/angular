import { Component, OnInit } from '@angular/core';
import { message } from 'src/app/model/message';
import { CurdService } from 'src/app/service/curd.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  msgObj : message=new message();
  msgArr : message[] = [];

  addMessageValue : string = '';
  editMessageValue : string = '';


  constructor(private crudService:CurdService) { }

  ngOnInit(): void {
    this.editMessageValue = '';
    this.addMessageValue = '';
    this.msgObj = new message();
    this.msgArr = [];
    this.getAllMessage();
  }
  getAllMessage() {
    this.crudService.getAllMessage().subscribe(res => {
      this.msgArr = res;
    }, err => {
      alert("Unable to get list of tasks");
    });
  }
  addMessage() {
    this.msgObj.message1 = this.addMessageValue;
    this.crudService.addMessage(this.msgObj).subscribe(res => {
      this.ngOnInit();
      this.addMessageValue = '';
    }, err => {
      alert(err);
    })
  }
  editMessage() {

    this.msgObj.message1= this.editMessageValue;
    this.crudService.editTask(this.msgObj).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to update task");
    })
  }
  deleteMessage(emsg : message) {
    this.crudService.deleteTask(emsg).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to delete task");
    });
  }
  call(emsg : message) {
    this.msgObj = emsg;
    this.editMessageValue = emsg.message1;
  }










}
