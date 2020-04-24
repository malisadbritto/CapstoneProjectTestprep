import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {NotificationService} from "../service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      users: any = {};
      email : string;
      password : string;

    constructor(private userService: UserService,
                private notify: NotificationService,
                private router: Router) {
    }

  ngOnInit() {
  
  }
  
  onLogin(){
      console.log('users', this.users);
        this.userService.userLogin(this.users).subscribe((res) => {
                console.log('res', res);
                if (res) {
                  if(res[0].email=="testprep@gmail.com" && res[0].password=="testprep") {

                    this.router.navigate(['/adminhome']);
                  }
                  else
                  {
           
                    this.notify.showSuccess('Login Successfully..!');
                    
                    this.router.navigate(['/home']);
                  }
                  localStorage.setItem('email', res[0].email);
                }
                 

            }, error => {
                this.notify.showError(error.message);
                console.log('error', error);
                alert("Incorrect login credentials.");
            });

            


    }

    onSignUp() {
        this.router.navigate(['/register']);
    }

}
