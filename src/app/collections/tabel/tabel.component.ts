import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit {

  @Input() data:any[]=[];
  @Input() header: any[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
