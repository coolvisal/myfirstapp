import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { LoginComponent } from './user/login.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activaor.service';
import { EventListResolverService } from './events/event-list-resolver.service';


@NgModule({
  declarations: [
    EventAppComponent,EventsListComponent,EventThumbnailComponent,NavBarComponent,
    LoginComponent,EventDetailsComponent,CreateEventComponent,Error404Component
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[
    EventService,
    ToastrService,
    EventListResolverService,
    EventRouteActivator,
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState
     }
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm("You have not saved this event. do you really want to cancel?")
  return true;
}
