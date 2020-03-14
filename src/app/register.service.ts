import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {

userList = [];
  constructor() { }
  addSubmit(value){
      this.userList.push(value);
console.log(this.userList);
  }
  getUser(){
    //console.log(this.userList)
    return this.userList;
  }
  userDelete(index){
    this.userList.splice(index , 1)
  }
}