import { TableService } from './../table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
items = [{name:'ngConf 2025', 
         date: '3/1/2025',
         time: '8am', 
         location: {address: '123 Main St',
                    city: 'Salt Lake City, UT',
                    country: 'USA'}}];
currentCounter?: number;
events = [
  {name:'Angular Connect', date: '9/26/2036', time: '10am', location: {address: '1 London Rd', city: 'London', country: 'England'}},
  {name:'ng-nl', date: '4/15/2037', time: '9am', location: {address: '127 DT ', city: 'Amsterdam', country: 'NL'}},
  {name:'ng-conf 2037', date: '4/15/2037', time: '9am', location: {address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA'}},
  {name:'UN Angular Summit', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}},
];

newevents = [
  {name:'Angular Connect', date: '9/26/2036', time: '10am', location: {address: '1 London Road ', city: 'London', country: 'England'}},
  {name:'ng-conf 2037', date: '4/15/2037', time: '9am', onlineUrl: 'https://www.ng-conf.org/'},
  {name:'Future Conf (Location/Url TBD)', date: '6/10/2037', time: '8am'},
  {name:'ng-nl', date: '4/15/2037', time: '9am', onlineUrl:'http://ng-nl.org/'},
  {name:'UN Angular Summit', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}, onlineUrl: 'http://unangularsummit.org'}
];

secondevents = [
  {name:'Angular Connect', date: '9/26/2036', time: '10am', location: {address: '1 London Road ', city: 'London', country: 'England'}, format:"InPerson"},
  {name:'ng-conf 2037', date: '4/15/2037', time: '9am', onlineUrl: 'https://www.ng-conf.org/', format:"Online"},
  {name:'Future Conf (Location/Url TBD)', date: '6/10/2037', time: '8am'},
  {name:'UN Angular Summit', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}, format:"InPerson"}
]     
avents!: any[];
  constructor(private tableService: TableService) { 

  }

  ngOnInit(): void {
    this.avents = this.tableService.getEvents();
  }
  displayCounter(counter: number){
     this.currentCounter = counter
  }

  getFormatClass(eventFormat: any){
  
    if (eventFormat === 'InPerson') 
    return ['in-person']
  
  if (eventFormat === 'Online')
    return ['online']
  
  return ['tbd']
}

}
