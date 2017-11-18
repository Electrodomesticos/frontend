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
  userId = "";

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
               
                   this.getUserId(value.email)
                       //this.router.navigateByUrl('dashboard/' + this.getUserId(value.email));
                    }
                    else{
                      alert("ERROR PASSWORD")
                    }
                }); 

    }


    getUserId(userMail){
      this.userService.lookForUser(userMail)
      

      .subscribe(  
        res => {
                        // this.areas = resAreaData;
                      
                      
                
                      },
        error => console.log("Error: ", error),
       // () => this.router.navigate(['/dashboard'])
          () =>  this.getPercentage()

          );
    //   .subscribe(
    //             res => {
    //               // this.areas = resAreaData;
    //                 console.log('AREAS CARGADAS: ', res[0].id)
    //                 this.userId = res[0].id;
    //                 return res[0].id
    //             },
    //             error =>{    this.router.navigateByUrl('dashboard')}
    //           );

     }

      getPercentage(){
        this.userService.lookForPercentage().subscribe(
          res => {
          },
error => console.log("Error: ", error),
          () => this.router.navigate(['/dashboard'])
        )

      }

        
}


    
