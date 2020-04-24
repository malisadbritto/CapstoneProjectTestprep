import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  users: any = {};
  email : string;
  constructor(private userService: UserService,private notify: NotificationService) { }
  errormessage='';
  ngOnInit(): void {
    this.email = localStorage.getItem('email');
  }
  OnQuizSubmit()
  {
    this.errormessage='';
    console.log('users', this.users);
    this.userService.adminQuiz(this.users)
        .subscribe((res) => {
            console.log('res', res);
            // this.router.navigate(['/login']);
            this.errormessage=res.message;
           
           

        }, error => {
          
            this.notify.showError(error.message);
              console.log('error', error);
            
            
        })
        this.errormessage="Successfully Done";
        
  }
}
