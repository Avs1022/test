import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(){
  }
  
  title = 'myapp';
  private navbutton=[
    {
      text:"home",
      href:'/homepage'
    },
    {
      text:"loginscreen",
      href:'/loginscreen'
    },
    {
      text:'productpage',
      href:'/productpage'
    }
  ]
}
