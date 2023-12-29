import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  //Adding external module http-client in ctor
  constructor(private myClient : HttpClient) { }

  // private url_db = "https://jsonplaceholder.typicode.com/users";
  private url_db = "http://localhost:3000/students";
  // private url2 = "http://localhost:3000/students"

  getAllUsers(){
    return this.myClient.get(this.url_db)
  }
  getUserById(id:number){
    return this.myClient.get(this.url_db + "/" + id)
  }

  deleteUserById(id:number){
    return this.myClient.delete(this.url_db + "/" + id)
  }

  AddNewUser(newUser:any){
    return this.myClient.post(this.url_db,newUser);
  }

  updateUser(id:number , data:any){
  return this.myClient.put(this.url_db +"/"+id , data)
  }
}
