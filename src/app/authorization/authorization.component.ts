import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/services/authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  credentials={
    
    password:"",
    userName:""  
  }
  
  constructor(private loginService:AuthorizationService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("form submitted");
    if((this.credentials.userName!='' && this.credentials.password!='') && 
    (this.credentials.userName!=null && this.credentials.password!=null)){
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any)=>{
          console.log("success");
          console.log(response);
          console.log(response.authToken);
          
          this.loginService.loginUser(response.authToken,response.userid);
          window.location.href="/pensiondetails";
        },
        error =>{
          console.log("error");
          console.log(error);
          
        }
      );
    }
  }
}
