import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppService } from 'src/app/app.service';
import { ServiceResponse } from 'src/app/_models/ServiceResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private appService: AppService,
              private httpClient: HttpClient) { }

  getAllPotatoTypes(): Observable<ServiceResponse> {
    return this.httpClient.get<ServiceResponse>(this.appService.url + 'potato/type/getAll');
  }
}
