import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { AuthService } from '../../../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  success:boolean =false;
  public submitted: boolean = false;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
      email: [''],
      password: ['']
    })
  }

  ngOnInit() { }


  registerUser() {
    this.submitted = true;
    if (this.signupForm.valid) {
      this.submitted = false;
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset()
        this.signupForm.disable()
        this.success =true;
        //this.router.navigate(['log-in']);
      }
    })
  }
  }

}