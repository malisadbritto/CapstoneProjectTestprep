import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  users: any = {};
  email : string;
  constructor(private userService: UserService,private notify: NotificationService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
       
  }
  contactinfo='';
  alluserinfo='';
  getContactInfo(){
    //get contact info from mongodb
    this.userService.userContactinfo().subscribe((res) => {
      console.log('res', res);
      console.log('res', res[0].name);
     this.contactinfo=res
  }, error => {
    
      this.notify.showError(error.message);
        console.log('error', error);
      
      
  });
  }
//get all user

getUsersInfo(){
  this.userService.userInfo().subscribe((res) => {
    console.log('res', res);
  
   this.alluserinfo=res;
}, error => {
  
    this.notify.showError(error.message);
      console.log('error', error);
    
    
});
}


}
