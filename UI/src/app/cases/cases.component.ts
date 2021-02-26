import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
btnStatus ="";
selected ="";
isShown: boolean = false ;
onItemChange(value){
  console.log(" Value is : ", value );
  this.selected = value;
}
onSubmit(event){
  this.btnStatus= "Submitted";
  this.isShown= ! this.isShown;
}
onClear(event){
  this.btnStatus ="Cleared";
  this.isShown= false;
}
}