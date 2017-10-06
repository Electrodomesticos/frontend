import { Component, OnInit }        from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService }      from '../auth.service';
import { Router } from "@angular/router";


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router:Router,
  ) {}

  ngOnInit() {
    this.submitted = false;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(value: any) {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.router.navigateByUrl('/inicio');
      

     }

    this.authService.logIn(value.email, value.password).subscribe(
      res => {
    
        if(res.status == 200){
          this.router.navigate(['/dashboard']);
          this.authService.redirectAfterLogin.bind(this.authService),
          this.afterFailedLogin.bind(this)
        }
      }
    );
  }

  signInWithGithub() {
     this.authService.signInWithGithub().subscribe(
        this.authService.redirectAfterLogin.bind(this.authService),
        this.afterFailedLogin.bind(this)
     );
  }

  afterFailedLogin(errors: any) {
    let parsed_errors = JSON.parse(errors._body).errors;
    for (let attribute in this.loginForm.controls) {
      if (parsed_errors[attribute]) {
        this.loginForm.controls[attribute].setErrors(parsed_errors[attribute]);
      }
    }
    this.loginForm.setErrors(parsed_errors);
  }
}
