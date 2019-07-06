import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { ServiceResponse } from 'src/app/_models/ServiceResponse';
import { PotatoType } from 'src/app/_models/PotatoType';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isLoadTypes = true;
  potatoTypes: PotatoType[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoadTypes = true;
    this.userService.getAllPotatoTypes().subscribe((serviceResponse: ServiceResponse) => {
      this.isLoadTypes = false;
      this.potatoTypes = serviceResponse.data.potatoTypes;
    });
  }

}
