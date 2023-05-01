import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirectives';

  //  This is used for the ngIf check.. if true then display message . if false then display false part.
  status:boolean=false;

  //  This is used for the ngFOr
  items =[
    {id:1,name:'shingadiya Ravi'},
    {id:2,name:'John Cena'},
    {id:3,name:'Nikki Bella'},
    {id:4,name:'The Rock'}
  ];

  //  This is used for he set selected name from the dropdown list...
  selectedName:string='';

  getName(item:any){
    console.log(item.target.value);
    this.selectedName=item.target.value;
  }
}
