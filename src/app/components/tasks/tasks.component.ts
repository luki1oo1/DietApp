import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public tab = [1, 4, 9, 99];
  public tab1 = [4, 4, 4];
  get getSumEl() {
    return this.tab.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  getTableNumbers(arg: number[]) {
    console.log(arg);
  }

  task3(arg: any[]) {
    console.log(arg.every((el) => el === arg[0]));
  }
  //5
  tableNumbers = [33, 1, 5, 6, 9, 66, 89];
  maxAndMinNumbers(arg: number[]) {
    const array = arg.sort((a, b) => a - b);
    console.log(array);
    const obj = {
      min: array[0],
      max: array[array.length - 1],
    };
    console.log(obj);
  }
  //6

  array = [1, 2, 3, 3, 3, 4, 5, 5];

  strArray = ['q', 'w', 'w', 'w', 'e', 'i', 'u', 'r',1 , 3, 4];

  checkDuplicates(arr: any, x: any) {
    let findDuplicates = (arr: any) =>
      arr.filter((item: any, index: any) => arr.indexOf(item) != index);

    findDuplicates(arr).find((el: any) => console.log(el === x)); // All duplicates
  }

  //7

  getDuplicationEl(array1: any, array2: any) {
    const filteredArray = array1.filter((value: any) => array2.includes(value));
    console.log(filteredArray)
  }
  constructor() {}

  ngOnInit(): void {
    this.maxAndMinNumbers(this.tableNumbers);
    this.getTableNumbers(this.tab);
    this.task3(this.tab);
    this.checkDuplicates(this.strArray, 'r');
    this.getDuplicationEl(this.array, this.strArray);
  }
}
