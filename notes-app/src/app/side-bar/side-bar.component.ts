import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  data = [];

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.data = JSON.parse(localStorage.getItem('notes')).slice().reverse();
    this.data.forEach(element => {
      element.date = new Date(element.date);
    });
    console.log("SideBarComponent -> ngOnInit -> this.data", this.data);
  }

}
