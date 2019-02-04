import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  process(count) {
    count += 1;
    count /= 2;
    return count;
  }
}
