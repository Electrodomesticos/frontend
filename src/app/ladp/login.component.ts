// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router,  private formBuilder: FormBuilder) {}

  // onSubmit(email, password) {
  //   this.userService.login(email, password).subscribe((result) => {
  //     if (result) {
  //       this.router.navigate(['']);
  //     }
  //   });
  // }

  
  submitted: boolean;
  loginForm: FormGroup;

  ngOnInit() {
    this.submitted = false;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  submit(value: any) {
    
        this.submitted = true;
        if (!this.loginForm.valid) { return; }
    
        
      //   this.userService.login(value.email, value.password).subscribe(
          
      //  //     this.userService.redirectAfterLogin.bind(this.userService),
      //   //  this.afterFailedLogin.bind(this)
      //   );
        // this.submitted = true;
        // if (this.loginForm.valid) {
        //   this.router.navigateByUrl('/dashboard');
          
    
        //  }
    
        // this.userService.login(value.email, value.password).subscribe(
        //   res => {
        
        //     if(res.status == 200){
        //       // this.router.navigate(['/dashboard']);
        //       // this.authService.redirectAfterLogin.bind(this.authService),
        //       // this.afterFailedLogin.bind(this)

        //       alert("OK")

        this.userService.login(value.email, value.password)
            .subscribe(
                data => {
                    if(data==true){
                    this.router.navigateByUrl('dashboard');
                    }
                    else{
                      alert("ERROR PASSWORD")
                    }
                });
                
    }

        
}


    
