import { Component, OnInit } from '@angular/core';

import {PotatoType} from '../../../_models/PotatoType';
import {ServiceResponse} from '../../../_models/ServiceResponse';
import {UserService} from '../user.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {

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
