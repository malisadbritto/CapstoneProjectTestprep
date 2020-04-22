import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    api = environment.api;

    constructor(private http: HttpClient) {
    }

    userLogin(data) {
        return this.http.post<any>(this.api + '/employee/login', data);
    }

    userSignUp(data) {
        return this.http.post<any>(this.api + '/employee/register', data);
    }

    userInfo(){
        return this.http.get<any>(this.api + '/employee/userinfo');
    }

    userContact(data){
        return this.http.post<any>(this.api + '/contact/contact', data);
    }
    
    userContactinfo(){
        return this.http.get<any>(this.api + '/contact/contactinfo');
    }


}
