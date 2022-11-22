import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  serverElements = [];
  // newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}
  onAddServer(serverNameInput: string) {
    this.serverCreated.emit({
      serverName: serverNameInput,
      serverContent: this.newServerContent,
    });
  }
  onAddBlueprint(serverNameInput: string) {
    this.blueprintCreated.emit({
      serverName: serverNameInput,
      serverContent: this.newServerContent,
    });
  }
}
