import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers : boolean = false;
  serverCreationStatus : string = "No servers created";
  serverName : string = "Test";
  serverCreated = false;
  servers = ['server1','server2']
  constructor() { 
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServerCreated(): void {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created. Name is "+ this.serverName;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event : any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }



}
