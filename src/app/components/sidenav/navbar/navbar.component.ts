import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() toggled = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public toggleSideNav() {
    this.toggled.emit();
  }
}
