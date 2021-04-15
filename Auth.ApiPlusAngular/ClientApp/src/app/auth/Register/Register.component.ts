import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierModule, NotifierService } from 'angular-notifier';
import { RegisterModel } from 'src/app/Models/register.model';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private notifier:NotifierService,
    private router:Router,
    private authServise: AuthService
    
  ) { }

  confirmPassword:string;
  model = new RegisterModel();
  submitRegister()
  {
    if(!this.model.isValid()){
      this.notifier.notify("error","Plese enter allfields!")
    }
    else if(this.confirmPassword != this.model.Password)
    {
      this.notifier.notify("error","Password is not valid!") 
    }
    else if(!this.model.isEmail){
       this.notifier.notify("error","Email is not valid!") 
    }
    else {
      this.authServise.register(this.model).subscribe(data => {
        if(data.code  == 200)
        {
          this.notifier.notify("Success", "You registered in system!");
          this.router.navigate(['/login']);
        }
        else 
          for (let i = 0; i < data.errors.length; i++) 
            this.notifier.notify("Error!", data.errors[i]);
      })
    }
  }
  ngOnInit() {
  }

}
