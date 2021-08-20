import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from '../shared/data.service';
import { Todos } from '../shared/todos.module';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todos[];
  showValidationErrors: boolean;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return;
    this.dataService.addTodo(new Todos(form.value.text));

    this.showValidationErrors = false;
    form.reset();
  }
  toggleCompleted(todo: Todos) {
    todo.completed = !todo.completed;
  }
  editTodo(todo: Todos) {
    //We need index of Todo

    const index = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo,
    });

    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        this.dataService.updateTodo(index, result);
      }
    })
    //this.dataService.updateTodo();
  }
  deleteTodo(todo: Todos){
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index);
  }
}
