import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'event-thumbnail',
    templateUrl:'event-thumbnail.component.html',
    styles:[`
         .thumbnail { min-height: 210px; }               
          `]
})
export class EventThumbnailComponent {
    @Input() event:any;
    @Output() eventClick=new EventEmitter();
    handleClickMe(){
        this.eventClick.emit(this.event.name);
    }

    name:string="visal ahmad";
}