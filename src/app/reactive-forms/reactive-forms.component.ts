import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  taskObj:Task;
  originalTaskList:Task[]=[];
  taskList:Task[]=[];
  tagsList:string[]=["Work","Market","Meeting","Calls","Defect","Health","Interview","Office","Work","Motivation"];
  filterType:string='';
  selectedTag:string='';
  // initializing the task object
  constructor(){
    this.taskObj=new Task();
    // reading the data from local Storage
    
    const localData=localStorage.getItem('todoapp');
    if(localData!=null){
      // converting the data into array format
      this.taskList=JSON.parse(localData);
      this.originalTaskList=this.taskList;

    }

  }

  createNewTask(){
    debugger;
    // to disconnect the object reference 
    const task=JSON.stringify(this.taskObj);

    const parseTask=JSON.parse(task);
    this.taskList.push(parseTask);
    this.originalTaskList=this.taskList;
    localStorage.setItem("todoapp",JSON.stringify(this.taskList));
  }
  onComplete(){
    debugger;
    // const newData=this.taskList;
    this.originalTaskList=this.taskList;
    localStorage.setItem("todoapp",JSON.stringify(this.taskList));

  }
  onRemove(index:number){
    debugger;
    this.taskList.splice(index,1);
    this.originalTaskList=this.taskList;
    localStorage.setItem("todoapp",JSON.stringify(this.taskList));
  }

  getArray(value:string):string[]{
    const arr=value.split(',');
    return arr;

  }

  setFilter(type:string){
   
    this.filterType=type;
    this.selectedTag="";
    if(this.filterType=="showCompleted"){
      this.taskList=this.originalTaskList.filter(e=>e.isCompleted==true);
    }
    else if(this.filterType="showAll"){
      this.taskList=this.originalTaskList;

    }
    else
    {
      
      this.taskList=this.originalTaskList;


    }
    


  }
  filterTag(tagName:string){
    debugger;
   this.selectedTag=tagName;
   const filterData=this.originalTaskList.filter((item)=>{
      return item.tags.includes(tagName);
   })
   this.taskList=filterData;
  }

}

export class Task{
  taskName:string;
  dueDate:string;
  tags:string;
  isCompleted:boolean;
  constructor(){
    this.taskName="";
    this.dueDate="";
    this.tags="";
    this.isCompleted=false;
  }

}
