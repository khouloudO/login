import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({


      username: ['', Validators.required],
      password: ['', Validators.required],
     

    }, {

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
   
    this.authService.signinUser(this.registerForm.value).subscribe((res: { [x: string]: any; }) => {
      if (res['response']) {
        this.authService.storeJwtToken(res['token']);
        this.router.navigate(['site']);
       
      }
   
    }
   
    );

  }
}
