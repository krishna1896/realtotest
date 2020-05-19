import { Component, OnInit } from '@angular/core';
import { users } from '../models/user';
import { UsersService } from '../services/users.service';
import { Router } from '../../../node_modules/@angular/router';
import { ToastrManager } from '../../../node_modules/ng6-toastr-notifications';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: users
  constructor(private us: UsersService, private rt: Router, private toast: ToastrManager) {
    this.user = new users()
  }

  registrationSuccess() {
    this.toast.infoToastr("User Added..")
  }

  fieldError() {
    this.toast.errorToastr("Enter All Fields..")
  }

  addUser(frm) {
    if (frm.valid) {
      // alert(JSON.stringify(this.user))
      this.us.addUser(this.user).subscribe((data)=>{
        this.registrationSuccess()
        this.rt.navigate(['login'])
      })
    } else {
      this.fieldError()
    }
  }

  ngOnInit() {
  }

}
