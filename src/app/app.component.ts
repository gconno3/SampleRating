import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Star Rating';
  rating:number
    recordList:any[]=[
      {'Id':1,'Framework':'Angular JS', 'myList':[true,true,true,true,true]},
      {'Id':2,'Framework':'Angular 2', 'myList':[true,true,true,true,true]},
      {'Id':3,'Framework':'Angular 4', 'myList':[true,true,true,true,true]},
      {'Id':4,'Framework':'Angular 5', 'myList':[true,true,true,true,true]},
      {'Id':5,'Framework':'Angular 6', 'myList':[true,true,true,true,true]},

    ];
      setStarTable(record:any,data:any){
        this.rating=data+1;
        var tableList = this.recordList.find(function (obj: any) { return obj.Id === record.Id });
        for(var i=0;i<=4;i++){
          if(i<=data){
            tableList.myList[i]=false;
          }
          else{
            tableList.myList[i]=true;
          }
        }
      }
}
