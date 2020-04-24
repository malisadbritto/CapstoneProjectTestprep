import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   
     users: any = {};
      constructor(private userService: UserService,
                private notify: NotificationService,
                private router: Router) {
    }
    infoMessage='';
  
   ngOnInit() {
   
  }
 
   OnContactSubmit(){
    this.infoMessage='';
    console.log('users', this.users);
    this.userService.userContact(this.users)
        .subscribe((res) => {
            console.log('res', res);
            // this.router.navigate(['/login']);
            this.infoMessage="Invalid email Address.";
           
           

        }, error => {
          
            this.notify.showError(error.message);
              console.log('error', error);
            
            
        })
        this.infoMessage="Thanks for Your Message.Will get back to you Soon.";
        
   }
}
