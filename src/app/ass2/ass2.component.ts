import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass2',
  templateUrl: './ass2.component.html',
  styleUrls: ['./ass2.component.css']
})
export class Ass2Component implements OnInit {

  userName : string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.userName = "";
  }

}
