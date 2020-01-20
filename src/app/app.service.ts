import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'http://localhost:3000/api/';

  constructor() { }
}
