import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { UserRoute } from "./user.routes";
import { ProfileComponent } from "./profile.component";

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(UserRoute)
    ],
    declarations:[
        ProfileComponent
    ],
    providers:[]
})
export class UserModule{}