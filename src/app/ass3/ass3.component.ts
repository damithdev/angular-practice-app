import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['./ass3.component.css']
})
export class Ass3Component implements OnInit {

  showText = false;
  clicks = []
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.showText = !this.showText;
    this.clicks.push("Button clicked : " + this.showText)
  }
}
