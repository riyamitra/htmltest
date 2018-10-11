import { Component, OnInit, Input } from '@angular/core';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';


@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {

  arrayList = new Array();

  draggableListLeft = [
    {
      content: "Left",
      effectAllowed: "link",
      disable: false,
      handle: false,
    }

  ];

  layout: any;
  horizontalLayoutActive: boolean = false;
  private currentDraggableEvent: DragEvent;
  private currentDragEffectMsg: string;
  private readonly verticalLayout = {
    container: "row",
    list: "column",
    dndHorizontal: false
  };
  private readonly horizontalLayout = {
    container: "row",
    list: "row",
    dndHorizontal: true
  };

  constructor() {

    this.setHorizontalLayout(this.horizontalLayoutActive);
  }

  setHorizontalLayout(horizontalLayoutActive: boolean) {

    this.layout = (horizontalLayoutActive) ? this.horizontalLayout : this.verticalLayout;
  }

  onDragStart(event: DragEvent) {

    this.currentDragEffectMsg = "";
    this.currentDraggableEvent = event;


    console.log("Drag started!");
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    console.log('dragged called')
    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;
    console.log(this.currentDragEffectMsg);
    if (effect === "move") {
      const index = list.indexOf(item);
      list.splice(index, 1);

    }
  }

  onDragCanceled(event: DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {

    this.currentDraggableEvent = event;

    console.log(`Drag ended!`);
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    console.log('drop called');
    if (list
      && (event.dropEffect === "copy"
        || event.dropEffect === "move")) {

      let index = event.index;

      if (typeof index === "undefined") {

        index = list.length;
      }
      console.log(event)
      list.splice(index, 0, event.data);
    }
  }

  delete(item) {
    this.draggableListLeft = this.draggableListLeft.filter(
      obj => obj.content !== item.content);
  }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      if (i == 45) {
        this.draggableListLeft.push(
          {
            content: "Left" + i,
            effectAllowed: "copy",
            disable: true,
            handle: false,
          }
        )
      } else
        this.draggableListLeft.push(
          {
            content: "Left" + i,
            effectAllowed: "copyMove",
            disable: false,
            handle: false,
          }
        );

    }
    console.log(this.draggableListLeft)
  }

}
