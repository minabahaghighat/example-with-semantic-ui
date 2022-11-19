import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accardion',
  templateUrl: './accardion.component.html',
  styleUrls: ['./accardion.component.css']
})
export class AccardionComponent implements OnInit {
  @Input() acardionItems:any[]=[];
  openIndexItem=0;

  constructor() { }

  ngOnInit(): void {
  }

  handleShowAcardion(index:number){
    if(index==this.openIndexItem){
      this.openIndexItem==-1;

    }else{
      this.openIndexItem=index;
    }
  }

}
