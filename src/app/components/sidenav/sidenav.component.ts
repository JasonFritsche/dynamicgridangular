import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public opened: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public OnToggled() {
    this.opened = !this.opened;
  }
}
