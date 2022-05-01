import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    this.userService.getUser(this.loginForm.value.email).then(
      (res: any) => {
        console.log(res);
        if (res.length === 0) {
          console.log('Account does not exist');
          this.snackbar.open('Account does not exist');
        } else {
          if (res[0].password === this.loginForm.value.password) {
            console.log('matched');
            this.snackbar.open('login successfully')
          } else {
            console.log('incorrect password');
            this.snackbar.open('Incorrect password')

          }
        }
      }
    ).catch(err => {
      console.log(err);

    })
  }


}
