import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject < any >(['My First Goal', 'My Second Goal', 'My Third Goal']);
  goal = this.goals.asObservable();
  constructor() { }
  changeGoal(goal) {
    this.goals.next(goal);
  }

}
