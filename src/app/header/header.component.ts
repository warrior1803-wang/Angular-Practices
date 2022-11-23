import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() selectEvent = new EventEmitter<string>();

  onSelect(value: string) {
    this.selectEvent.emit(value);
  }
  constructor() {}

  ngOnInit(): void {}
}
