import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveFormTest';
  loginForm = new FormGroup({
    FirstName: new FormControl('',[Validators.required,Validators.minLength(4),forbiddenNameValidator(/bob/i)]),
    LastName: new FormControl('',[Validators.required]),
    Address: new FormGroup({
      Street: new FormControl('',[Validators.required]),
      City: new FormControl('',[Validators.required]),
      State: new FormControl('',[Validators.required]),
      Zipcode: new FormControl('',[Validators.required])
    })
  })

  // get FirstName(){
  //   return this.loginForm.get('FirstName');
  // }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}
