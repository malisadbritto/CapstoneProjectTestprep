import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";
@Component({
  selector: 'app-quiz-front',
  templateUrl: './quiz-front.component.html',
  styleUrls: ['./quiz-front.component.css']
})
export class QuizFrontComponent implements OnInit {
  users: any = {};
  
  option1=null;
  quizinfo='';
  submissionmessage='';
  constructor(private userService: UserService,private notify: NotificationService) { }

  ngOnInit(): void {
  
    this.getQuizinfo();
  }

  getQuizinfo(){
    this.userService.adminQuizinfo().subscribe((res) => {
      console.log('res', res);
     this.quizinfo=res;
     
  }, error => {
    
      this.notify.showError(error.message);
        console.log('error', error);
      
      
  });
  }

  onSubmitQuiz(){
    this.option1=null;
    this.submissionmessage="Thanks!!! Your Result will be emailed."
  }
}
