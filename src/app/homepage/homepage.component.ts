import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  userdetails: any
  constructor(private us: UsersService, private rt: Router) { }

  logout() {
    this.rt.navigate(['login'])
    sessionStorage.clear()
  }

  ngOnInit() {
    this.us.getUsers().subscribe((data)=>{
      this.userdetails = data
      console.log(JSON.stringify(this.userdetails))
    })
  }

}
