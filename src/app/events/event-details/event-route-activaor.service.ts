import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, CanActivate } from "@angular/router";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventSrvice:EventService,
                  private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
     const eventExist=!!this.eventSrvice.getEvent(+route.params['id']);
     if(!eventExist)
        this.router.navigate(['404']);
     return eventExist;
    }
}