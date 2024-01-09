import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adddata';
 
  userData:string[]=[]
 
  addData(data:string){
    console.log(data);
    this.userData.push(data)
    console.log(this.userData);
   
}
  }
