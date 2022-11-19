import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data=[
  {name:'mina', age:24 , job:'engineer'},
  {name:'mohammad Reza', age:27, job:'engineer'},
  {name:'ali', age:36 , job:'doctor'},
  {name:'zahra', age:29 , job:'ui designer'},
  ];

  header=[
    {key:"name", value:"Name"},
    {key:"age", value:"Age"},
    {key:"job", value:"Job"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
