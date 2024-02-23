import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  show: boolean = false
  // // currentLang = localStorage.getItem('lang')
  // form = new FormGroup({
  //   usr: new FormControl('', [Validators.required, Validators.pattern(Patterns.Email)]),
  //   pwd: new FormControl('', Validators.required),
  // })
  constructor (private router: Router) { }




  // // // appear password chars
  showpassword() {
    this.show = !this.show;
  }

  // toggle language


  login() {
    this.router.navigate(['/dashboard/home']);
  }
  toggleLang() {

  }
}
