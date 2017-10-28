import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../../Services/sign-up/sign-up.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User;

  constructor(private signUpService: SignUpService ) { }

  createUser(user: User) {
    this.signUpService.setUser(user).subscribe(
      data => console.log('espacio para un alert', data),
      error => console.error('espacio para un alert fallido'));
    
  }

  ngOnInit() {
  }

}
