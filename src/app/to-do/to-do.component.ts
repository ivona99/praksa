import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  title = 'To do list';
  list?: any[]=[];
  addTask(item:string){
    console.log(item)
    this.list?.push({id:this.list.length, name:item});

    console.log(this.list)
}
removeTask(id:number){
  this.list=this.list?.filter(item=>item.id!==id);
  console.log(id);


//  this.list=this.list?.splice(index, 1);
//  console.log(index);
}
  constructor() { }

  ngOnInit(): void {
  }

}
