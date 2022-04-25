import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() buttonSelected: EventEmitter<number> = new EventEmitter();
 
  public stopped = false
  private intervalId: any;
  counter = 0;
  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {this.counter++}, 1000)
  }
  buttonClicked(counter: number) {
    this.buttonSelected.emit(counter);
    
  }
  stopTimer() {
    clearInterval(this.intervalId)
    this.stopped = true
  }
}
