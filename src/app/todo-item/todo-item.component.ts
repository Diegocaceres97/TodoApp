import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Todos } from '../shared/todos.module';
import tippy from 'tippy.js';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{

  constructor() { }
 
  @Input() todo: Todos 
  @Output() todoClicked: EventEmitter<any> = new EventEmitter()
  @Output() editClicked: EventEmitter<any> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<any> = new EventEmitter()

 
  ngOnInit(): void {
    
  }
  
  onTodoClicked(){
    this.todoClicked.emit()
  }

  onEditClicked(){
    this.editClicked.emit()
  }

  onDeleteClicked(){
    this.deleteClicked.emit()
  }

}
