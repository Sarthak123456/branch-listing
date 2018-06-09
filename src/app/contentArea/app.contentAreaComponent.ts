import { Component, OnInit } from "@angular/core";
import { TestService } from '../test.service';
import { Router } from '@angular/router';



@Component({
  selector: "contentArea",
  templateUrl: "./contentArea.html",
  // styleUrls: ["./test.component.css"]
})
export class contentAreaComponent implements OnInit {
  user:User;
  profiles = [];
constructor(private testService: TestService,private router: Router) { }

// onSelect(git){
    
//     let user= this.router.navigate(['/profiles', git.login]);
// }

  ngOnInit() {
  this.testService.getProfiles()
  .subscribe(resProfiles => this.profiles=resProfiles)
  
  
  
  
  }
 
  
}
