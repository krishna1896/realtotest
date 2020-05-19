import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '../../../node_modules/@angular/router';
import { ToastrManager } from '../../../node_modules/ng6-toastr-notifications';
import { users } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: users
  constructor(private us: UsersService, private rt: Router, private toast: ToastrManager) {
    this.user = new users()
  }

  loginSuccess() {
    this.toast.successToastr("Logged In Success")
  }

  fieldErr() {
    this.toast.errorToastr("Enter All Fields")
  }

  loggedIn(form) {
    if (form.valid) {
      this.us.login(this.user).subscribe((data) => {
        sessionStorage.setItem('isLoggedin', 'true')
        sessionStorage.setItem('token', data.token)
        this.loginSuccess()
        this.rt.navigate(['homepage'])
      })
    } else {
      this.fieldErr()
    }
  }

  register() {
    this.rt.navigate(['register'])
  }

  ngOnInit() {
  }

}
