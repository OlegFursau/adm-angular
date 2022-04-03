import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../user'
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-contacts-detals',
  templateUrl: './contacts-detals.component.html',
  styleUrls: ['./contacts-detals.component.scss']
})
export class ContactsDetalsComponent implements OnInit {
  user!: Observable<User>;
  id!: any;
  email!:string

  constructor(private activeteRouter: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.activeteRouter.params.subscribe((paramse) => this.id = paramse?.['id']);
    this.user = this.adminService.getPerson(this.id)
    // this user =  this.activeteRouter.data.pipe(map((data)=> data?.['user']))

  }

}
