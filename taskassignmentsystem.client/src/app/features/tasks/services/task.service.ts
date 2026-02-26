import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class TaskService {

  private apiUrl = '';
  private tasks$!: Observable<TaskModel[]>;

  /**
   *
   */
  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<TaskModel[]> {
    if (!this.tasks$) {
      this.tasks$ = this.httpClient.get<TaskModel[]>(this.apiUrl);
    }
    return this.tasks$;
  }

  createTask(newTasks: TaskModel) {
    return this.httpClient.post(this.apiUrl, newTasks);
  }

  updateTask(updateTask: TaskModel) {
    return this.httpClient.put(`${this.apiUrl}/${updateTask.id}`, updateTask);
  }

  deleteTask(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  refreshTasks() {
    this.tasks$ = this.httpClient.get<TaskModel[]>(this.apiUrl).pipe(shareReplay(1));
  }

  /*
  Interview Concept Covered

  Why use shareReplay(1)?
  → Prevents multiple HTTP calls
  → Caches result

  Cold vs Hot Observables

  Lazy execution 
*/


}
