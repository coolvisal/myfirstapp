import { Routes } from "@angular/router";
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./error/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activaor.service";
import { EventListResolverService } from "./events/event-list-resolver.service";

export const appRoutes:Routes=[
     {path:'events',component:EventsListComponent, resolve:{events:EventListResolverService}},
     {path:'events/new',component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
     {path:'events/:id',component: EventDetailsComponent, canActivate: [EventRouteActivator]},
     {path:'404',component: Error404Component},
     {path:'',redirectTo:'/events', pathMatch:'full'},
     {path:'user', loadChildren: 'app/user/user.module#UserModule'}
]
