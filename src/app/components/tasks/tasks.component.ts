import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public arrayStr = [{ key: 'lala',
                        age: '33' }];
  public tab = [1, 4, 9, 99];
  public tab1 = [4, 4, 4];
  get getSumEl() {
    return this.tab.reduce((acc, currentValue) => acc + currentValue);
  }

  //2
  isArrayOnlyNumbers(value: any): boolean {
    if (!Array.isArray(value)) {
      return false;
    }

    for (let i = 0; i < value.length; i++) {
      if (typeof value[i] !== 'number') {
        return false;
      }
    }

    return true;
  }
  //3
  task3(arg: any[]) {
    console.log(arg.every((el) => el === arg[0]));
  }
  //4
  generateColorCode(): string {
    let code = '#';
    const hexValues = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
      code += hexValues[Math.floor(Math.random() * 16)];
    }

    return code;
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

  strArray = ['q', 'w', 'w', 'w', 'e', 'i', 'u', 'r', 1, 3, 4];

  checkDuplicates(arr: any, x: any) {
    let findDuplicates = (arr: any) =>
      arr.filter((item: any, index: any) => arr.indexOf(item) != index);

    findDuplicates(arr).find((el: any) => console.log(el === x)); // All duplicates
  }

  //7

  getDuplicationEl(array1: any, array2: any) {
    const filteredArray = array1.filter((value: any) => array2.includes(value));
    console.log(filteredArray);
  }

  //8
  convertArrayOfObjectsToCSV(array: Array<{ [key: string]: string }>): string {
    const header = Object.keys(array[0]).join(',') + '\n';
    const rows = array.map((obj) =>
      Object.values(obj)
        .map((val) => `"${val}"`)
        .join(',')
    );
    return header + rows.join('\n');
  }

  //9
  
  constructor() {}

  ngOnInit(): void {
    console.log(this.getSumEl, '1');
    console.log(this.isArrayOnlyNumbers(this.tab), '2');
    this.task3(this.tab);
    console.log(this.generateColorCode(), '4');
    this.maxAndMinNumbers(this.tableNumbers);
    this.checkDuplicates(this.strArray, 'r');
    this.getDuplicationEl(this.array, this.strArray);
    console.log(this.convertArrayOfObjectsToCSV(this.arrayStr));
  }
}
