import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { mapTo } from 'rxjs/operators';

import { filter, merge, Observable } from 'rxjs';
import { User } from '../../../user'
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  private showLoader!: Observable<boolean>;
  private hightLoader!: Observable<boolean>;
  isLoader!: Observable<boolean>;

  personalList!: Observable<User[]>;

  constructor(private adminService: AdminService, private router:Router) { }

  ngOnInit(): void {
    this.personalList = this.adminService.getPersonList();
    this.hightLoader = this.router.events.pipe(filter((e)=> e instanceof ResolveEnd),mapTo(false));
    this.showLoader = this.router.events.pipe(filter((e)=> e instanceof ResolveStart),mapTo(true));
    this.isLoader = merge(this.hightLoader,this.showLoader)

  }

}
