import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  isVisible:boolean=true;
  isToggle:boolean=true;
  string1:string="";
  string2:string='';
  selectedString:string=""

  hide(){
    this.isVisible=false;
  }
  show(){
    this.isVisible=true;

  }
  toggle(){
    this.isToggle=!this.isToggle;
  }

}

