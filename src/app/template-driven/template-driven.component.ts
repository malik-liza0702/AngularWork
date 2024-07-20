import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  student:any={
    firstname:"",
    lastname:"",
    email:"",
    city:"",
    check:false,
   
  }
  formvalue:any;
  onSubmit(){
    this.formvalue=this.student;
  }
  resetForm(){
    this.student={
      firstname:"",
    lastname:"",
    email:"",
    city:"",
    check:false,
    }
  }

}
