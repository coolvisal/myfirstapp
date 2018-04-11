import { Component } from "@angular/core";

@Component({
    selector: 'login-view',
    templateUrl: 'login.component.html'
})
export class LoginComponent{
    userName
    password
    login(formObject){
        console.log(formObject);
    }
}