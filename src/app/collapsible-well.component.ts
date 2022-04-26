import { Component } from "@angular/core";

@Component({
  selector: 'collapsible-well',
  template: `
  <div class="well" *ngIf="visible">
  <button (click)="hideContent()" class="btn btn-primary">Click</button>
  <ng-content ></ng-content>
  </div>
  `
})

export class ClosableWellComponent {
  visible: boolean = true;
hideContent(){
 this.visible = !this.visible;
}

}
