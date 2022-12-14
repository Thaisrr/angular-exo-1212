import { Pipe, PipeTransform } from '@angular/core';
import {Tasks} from "../models/Task";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Tasks, arg: 'all' | boolean): Tasks {
    if(arg === 'all') return value;
    return value.filter(td => td.is_done === arg);
  }


}
