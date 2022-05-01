import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, public userService: UserService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  create() {
    this.userService.createNewUser(this.signUpForm.value).then((res) => {
      console.log(res);

    }).catch((err) => {
      console.log(err);

    });
  }

}
