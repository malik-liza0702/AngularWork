import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {
  isVisible:boolean=true;
  isToggle:boolean=true;
  selectedValue:string="Mumbai";
  string1:string="";
  string2:string="";
  hideDiv(){
    this.isVisible=false;
  }
  showDiv(){
    this.isVisible=true;
  }
  toggle(){
    this.isToggle=!this.isToggle
  }


}
