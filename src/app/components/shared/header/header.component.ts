import { Component, OnInit } from '@angular/core';
import { Menu } from '../../core/interfaces/menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerItems: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initData();
  }

  private initData(){
    fetch("./assets/menu.json")
    .then(data => data.json())
    .then(menus => {
      this.headerItems.push(...menus);
    });
  }

  public focusIdElement(id : string) : string{
    return "Home" + id;
  }

}
