import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  acardionItems=[
    {
      title:"   What is a dog?",
      description:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
    },
    {
      title:"   What is a dog?",
      description:" What kinds of dogs are there?"
    },
    {
      title:"   What is a dog?",
      description:"There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
