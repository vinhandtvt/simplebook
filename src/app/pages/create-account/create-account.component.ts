import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  create() {
    this.userService.createNewUser(this.signUpForm.value).then((res) => {
      this.userService.user = res;
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/posts']);
    }).catch((err) => {
      console.log(err);
    });
  }

}
