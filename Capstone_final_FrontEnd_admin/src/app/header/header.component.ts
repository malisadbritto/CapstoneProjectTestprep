import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email = '';
  constructor() { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
  }

}
